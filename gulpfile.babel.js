"use strict";

import webpack from "webpack";
import webpackStream from "webpack-stream";
import gulp from "gulp";
import gulpif from "gulp-if";
import browsersync from "browser-sync";
import autoprefixer from "gulp-autoprefixer";
import sass from "gulp-sass";
import mqpacker from "css-mqpacker";
import sortCSSmq from "sort-css-media-queries";
import mincss from "gulp-clean-css";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";
import svg from "gulp-svg-sprite";
import imagemin from "gulp-imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminZopfli from "imagemin-zopfli";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminGiflossy from "imagemin-giflossy";
import imageminWebp from "imagemin-webp";
import webp from "gulp-webp";
import favicons from "gulp-favicons";
import replace from "gulp-replace";
import rigger from "gulp-rigger";
import plumber from "gulp-plumber";
import debug from "gulp-debug";
import clean from "gulp-clean";
import yargs from "yargs";

const webpackConfig = require("./webpack.config.js"),
	argv = yargs.argv,
	production = !!argv.production,
	smartgrid = require("smart-grid"),

	paths = {
		views: {
			src: [
				"./src/views/index.html",
				"./src/pages/*.html"
			],
			dist: "./dist/",
			watch: "./src/**/*.html"
		},
		styles: {
			src: "./src/styles/main.scss",
			dist: "./dist/styles/",
			watch: [
				"./src/blocks/**/*.scss",
				"./src/styles/**/*.scss"
			]
		},
		scripts: {
			src: "./src/js/index.js",
			dist: "./dist/js/",
			watch: [
				"./src/blocks/**/*.js",
				"./src/js/**/*.js"
			]
		},
		svg: {
			src: "./src/img/svg/*.svg",
			watch: "./src/img/svg/*.svg",
			dist: "./dist/img/sprites/",
		},
		images: {
			src: [
				"./src/img/**/*.{jpg,jpeg,png,gif,svg}",
				"!./src/img/svg/*.svg",
				"!./src/img/favicon.{jpg,jpeg,png,gif}"
			],
			dist: "./dist/img/",
			watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
		},
		webp: {
			src: "./src/img/**/*_webp.{jpg,jpeg,png}",
			dist: "./dist/img/",
			watch: "./src/img/**/*_webp.{jpg,jpeg,png}"
		},
		fonts: {
			src: "./src/fonts/**/*.{ttf,otf,woff,woff2}",
			dist: "./dist/fonts/",
			watch: "./src/fonts/**/*.{ttf,otf,woff,woff2}"
		},
		favicons: {
			src: "./src/img/favicon.{jpg,jpeg,png,gif}",
			dist: "./dist/img/favicons/",
		},
		server_config: {
			src: "./src/.htaccess",
			dist: "./dist/"
		}
	};

webpackConfig.mode = production ? "production" : "development";
webpackConfig.devtool = production ? false : "cheap-eval-source-map";

export const server = () => {
	browsersync.init({
		server: "./dist/",
		tunnel: false,
		notify: true
	});

	gulp.watch(paths.views.watch, views);
	gulp.watch(paths.styles.watch, styles);
	gulp.watch(paths.scripts.watch, scripts);
	gulp.watch(paths.svg.watch, svgsprites);
	gulp.watch(paths.images.watch, images);
	gulp.watch(paths.webp.watch, webpimages);
};

export const cleanFiles = () => gulp.src("./dist/*", {read: false})
	.pipe(clean())
	.pipe(debug({
		"title": "Cleaning..."
	}));

export const serverConfig = () => gulp.src(paths.server_config.src)
	.pipe(gulp.dest(paths.server_config.dist))
	.pipe(debug({
		"title": "Server config"
	}));

export const smartGrid = cb => {
	smartgrid("./src/styles/vendor", {
		outputStyle: "scss",
		filename: "_smart-grid",
		columns: 12, // number of grid columns
		offset: "30px", // gutter width
		mobileFirst: true,
		mixinNames: {
			container: "container"
		},
		container: {
			fields: "15px" // side fields
		},
		breakPoints: {
			xs: {
				width: "320px"
			},
			sm: {
				width: "576px"
			},
			md: {
				width: "768px"
			},
			lg: {
				width: "992px"
			},
			xl: {
				width: "1200px"
			}
		}
	});
	cb();
};

export const views = () => gulp.src(paths.views.src)
	.pipe(rigger())
	.pipe(gulpif(production, replace("main.css", "main.min.css")))
	.pipe(gulpif(production, replace("main.js", "main.min.js")))
	.pipe(gulp.dest(paths.views.dist))
	.pipe(debug({
		"title": "HTML files"
	}))
	.on("end", browsersync.reload);

export const styles = () => gulp.src(paths.styles.src)
	.pipe(gulpif(!production, sourcemaps.init()))
	.pipe(plumber())
	.pipe(sass())
	.pipe(postcss([
		mqpacker({
			sort: sortCSSmq
		})
	]))
	.pipe(gulpif(production, autoprefixer({
		browsers: ["last 12 versions", "> 1%", "ie 8", "ie 7"]
	})))
	.pipe(gulpif(production, mincss({
		compatibility: "ie8", level: {
			1: {
				specialComments: 0,
				removeEmpty: true,
				removeWhitespace: true
			},
			2: {
				mergeMedia: true,
				removeEmpty: true,
				removeDuplicateFontRules: true,
				removeDuplicateMediaBlocks: true,
				removeDuplicateRules: true,
				removeUnusedAtRules: false
			}
		}
	})))
	.pipe(gulpif(production, rename({
		suffix: ".min"
	})))
	.pipe(plumber.stop())
	.pipe(gulpif(!production, sourcemaps.write("./maps/")))
	.pipe(gulp.dest(paths.styles.dist))
	.pipe(debug({
		"title": "CSS files"
	}))
	.pipe(browsersync.stream());

export const scripts = () => gulp.src(paths.scripts.src)
	.pipe(webpackStream(webpackConfig), webpack)
	.pipe(gulpif(production, rename({
		suffix: ".min"
	})))
	.pipe(gulp.dest(paths.scripts.dist))
	.pipe(debug({
		"title": "JS files"
	}))
	.on("end", browsersync.reload);

export const svgsprites = () => gulp.src(paths.svg.src)
	.pipe(svg({
		shape: {
			dest: "intermediate-svg"
		},
		mode: {
			stack: {
				sprite: "../sprite.svg"
			}
		}
	}))
	.pipe(gulp.dest(paths.svg.dist))
	.pipe(debug({
		"title": "Sprites"
	}))
	.on("end", browsersync.reload);

export const images = () => gulp.src(paths.images.src)
	.pipe(gulpif(production, imagemin([
		imageminGiflossy({
			optimizationLevel: 3,
			optimize: 3,
			lossy: 2
		}),
		imageminPngquant({
			speed: 5,
			quality: [0.6, 0.8]
		}),
		imageminZopfli({
			more: true
		}),
		imageminMozjpeg({
			progressive: true,
			quality: 70
		}),
		imagemin.svgo({
			plugins: [
				{ removeViewBox: false },
				{ removeUnusedNS: false },
				{ removeUselessStrokeAndFill: false },
				{ cleanupIDs: false },
				{ removeComments: true },
				{ removeEmptyAttrs: true },
				{ removeEmptyText: true },
				{ collapseGroups: true }
			]
		})
	])))
	.pipe(gulp.dest(paths.images.dist))
	.pipe(debug({
		"title": "Images"
	}))
	.on("end", browsersync.reload);

export const webpimages = () => gulp.src(paths.webp.src)
	.pipe(webp(gulpif(production, imageminWebp({
		lossless: true,
		quality: 90,
		alphaQuality: 90
	}))))
	.pipe(gulp.dest(paths.webp.dist))
	.pipe(debug({
		"title": "WebP images"
	}));

export const fonts = () => gulp.src(paths.fonts.src)
	.pipe(gulp.dest(paths.fonts.dist))
	.pipe(debug({
		"title": "Fonts"
	}));

export const favs = () => gulp.src(paths.favicons.src)
	.pipe(favicons({
		icons: {
			appleIcon: true,
			favicons: true,
			online: false,
			appleStartup: false,
			android: false,
			firefox: false,
			yandex: false,
			windows: false,
			coast: false
		}
	}))
	.pipe(gulp.dest(paths.favicons.dist))
	.pipe(debug({
		"title": "Favicons"
	}));

export const development = gulp.series(cleanFiles, smartGrid,
	gulp.parallel(views, styles, scripts, svgsprites, images, webpimages, fonts, favs),
	gulp.parallel(server));

export const prod = gulp.series(cleanFiles, smartGrid, serverConfig, views, styles, scripts, svgsprites, images, webpimages, fonts, favs);

export default development;