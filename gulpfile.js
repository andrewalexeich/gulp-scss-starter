var gulp = require("gulp"),
    browsersync = require("browser-sync").create(),
    reload = browsersync.reload,
    autoprefixer = require("gulp-autoprefixer"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    cleanCSS = require("gulp-clean-css"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    svgo = require("gulp-svgo"),
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    imageminJpegRecompress = require("imagemin-jpeg-recompress"),
    favicons = require("gulp-favicons"),
    svgSymbols = require("gulp-svg-symbols"),
    replace = require('gulp-replace'),
    plumber = require("gulp-plumber"),
    ngrok = require("ngrok"),
    debug = require("gulp-debug"),
    clean = require("gulp-rimraf"),
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
    
    images: {
        src: ["src/img/**/*.*","!src/img/svg/*"],
        dest: "dest/img/"
    },
    
    favicons: {
        src: "src/img/favicons/*.{jpg,jpeg,png,gif}",
        dest: "dest/img/favicons/"
    },
    
    sprites: {
        src: "src/img/svg/*.svg",
        dest:  "dest/img/svg"
    },
        
    scripts: {
        src: "src/js/**/*.js",
        dest: "dest/js/"
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


// IMAGES
gulp.task("img", function() {
    return gulp.src(paths.images.src)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminJpegRecompress({
                loops: 1,

                // quality parameters: low, medium, high, veryhigh
                quality:'low'
            }),
            imagemin.svgo(),
            imagemin.optipng({optimizationLevel: 5}),
            pngquant({quality: '65-70', speed: 5})
        ]))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(debug({"title": "images"}))
        .pipe(browsersync.reload({ stream: true }));
});


// SVG SPRITES
gulp.task("svg_sprites", function() {
    return gulp.src(paths.sprites.src)
        .pipe(imagemin([imagemin.svgo()]))
        .pipe(svgSymbols({ templates: ['default-svg'] }))
        .pipe(gulp.dest(paths.sprites.dest));
});


// FACICON GENERATOR
gulp.task("favicons", function() {
    return gulp.src(paths.favicons.src)
        .pipe(favicons({
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
        }))
        .pipe(debug({"title": "favicons"}))
        .pipe(gulp.dest(paths.favicons.dest));
});


// SCRIPTS
gulp.task("scripts", function() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(concat("scripts.js"))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(debug({"title": "scripts"}))
        .pipe(browsersync.reload({ stream: true }));
});


// CLEAN
gulp.task("clean", function() {
    return gulp.src("dest/*", {read: false})
        .pipe(clean())
        .pipe(debug({"title": "clean"}));
});


// SERVER
gulp.task("serve", function() {
    return new Promise((res,rej) => {
        browsersync.init({
            server: "dest",
            port: 9002,
            host: 'localhost'
        }, function (err, bs) {
            ngrok.kill();
            ngrok.connect({
                proto: 'http',
                addr: bs.options.get('port'),
                web_addr: 6632
        }, function(err, url) {
                console.log("\n\n Вёрстка шарится для всех по этому адресу ---> " + url);
                console.log(" Ошибки ngrok --> " + (err == null ? "их нет" : err));
            });
        });
        res();
    });
});


// WATCH
gulp.task("watch", function() {
    return new Promise((res,rej)=> {
        watch(paths.html.src, gulp.series("html"));
        watch(paths.styles.src, gulp.series("styles"));
        watch(paths.images.src, gulp.series("img"));
        watch(paths.sprites.src, gulp.series("svg_sprites"));
        watch(paths.scripts.src, gulp.series("scripts"));
        res();
    });
});


// BUILD
gulp.task("src", gulp.parallel("html", "styles", "img", "svg_sprites", "favicons", "scripts"));
gulp.task("build", gulp.parallel("html", "styles", "img", "svg_sprites", "favicons", "scripts"));
gulp.task("default", gulp.series("clean", "src", "watch", "serve"));
