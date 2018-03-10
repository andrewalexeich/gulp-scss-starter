var gulp = require("gulp"),
    browsersync = require("browser-sync").create(),
    reload = browsersync.reload,
    autoprefixer = require("gulp-autoprefixer"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    cleanCSS = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    imageminJpegRecompress = require("imagemin-jpeg-recompress"),
    favicons = require("gulp-favicons"),
    svgSymbols = require("gulp-svg-symbols"),
    newer = require("gulp-newer"),
    cache = require("gulp-cache"),
    plumber = require("gulp-plumber"),
    debug = require("gulp-debug"),
    watch = require("gulp-watch");
    


// PATHS
var paths = {
    html: {
        src: "src/**/*.html",
        dest: "dest/"
    },

    styles: {
        src: "src/styles/**/*.sass",
        dest: "dest/styles/"
    },
    
    favicons: {
        src: "src/img/favicons/*",
        dest: "dest/img/favicons/"
    },
    
    images: {
        src: ["src/img/**/*.*", "!src/img/svg/icons/*", "!src/img/favicons/*"],
        dest: "dest/img/"
    },
    
    sprites: {
        src: "src/img/svg/icons/*",
        dest:  "dest/img/svg/sprites/"
    },
        
    scripts: {
        src: "src/js/**/*.js",
        dest: "dest/js/"
    },
    
    libs: {
        src: ["src/libs/**/*.min.js", "src/libs/**/*.min.css", "src/libs/**/*.css"],
        dest: "dest/libs/"
    }
};

    
// HTML
gulp.task("html", function() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(debug({"title": "html"}))
        .pipe(browsersync.reload({ stream: true }));
});


// STYLES
gulp.task("styles", function() {
    return gulp.src(paths.styles.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(cleanCSS({compatibility: "ie8"}))
        .pipe(rename({ suffix: ".min" }))
        .pipe(autoprefixer())
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(debug({"title": "styles"}))
        .pipe(browsersync.reload({ stream: true }));
});


// FACICON GENERATOR
gulp.task("favicons", function() {
    return gulp.src(paths.favicons.src)
        .pipe(cache(favicons({
            icons: {
                online: false,
                appleIcon: true,
                appleStartup: false,
                android: false,
                favicons: true,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        })))
        .pipe(gulp.dest(paths.favicons.dest))
        .pipe(debug({"title": "favicons"}));
});


// IMAGES
gulp.task("img", function() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminJpegRecompress({loops: 1, quality: "low"}),
            imagemin.svgo(),
            imagemin.optipng({optimizationLevel: 5}),
            pngquant({quality: "65-70", speed: 5})
        ]))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(debug({"title": "images"}))
        .pipe(browsersync.reload({ stream: true }));
});


// SVG SPRITES
gulp.task("sprites", function() {
    return gulp.src(paths.sprites.src)
        .pipe(svgSymbols({templates: ["default-svg"]}))
        .pipe(gulp.dest(paths.sprites.dest))
        .pipe(imagemin([imagemin.svgo()]))
        .pipe(debug({"title": "sprites"}));
});


// SCRIPTS
gulp.task("scripts", function() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(debug({"title": "scripts"}))
        .pipe(browsersync.reload({ stream: true }));
});


// LIBS
gulp.task("libs", function() {
    return gulp.src(paths.libs.src)
        .pipe(gulp.dest(paths.libs.dest));
});


// SERVER
gulp.task("serve", function() {
    return new Promise((res,rej) => {
        browsersync.init({
            server: "dest/",
            tunnel: "sitedev"
        });
    res();
    });
});


// WATCH
gulp.task("watch", function() {
    return new Promise((res,rej) => {
        watch(paths.html.src, gulp.series("html"));
        watch(paths.styles.src, gulp.series("styles"));
        watch(paths.images.src, gulp.series("img"));
        watch(paths.sprites.src, gulp.series("sprites"));
        watch(paths.scripts.src, gulp.series("scripts"));
        res();
    });
});


// BUILD
gulp.task("build", gulp.parallel("html", "styles", "img", "sprites", "scripts", "libs"));
gulp.task("default", gulp.series("build", gulp.parallel("watch", "serve")));