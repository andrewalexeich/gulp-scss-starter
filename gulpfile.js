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
    plumber = require("gulp-plumber"),
    ngrok = require("ngrok"),
    cache = require("gulp-cache"),
    del = require("del"),
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
        src: "src/img/**/*.*",
        dest: "dest/img/"
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
        .pipe(browsersync.reload({ stream: true }));
});


// STYLES
gulp.task("styles", function() {
    return gulp.src(paths.styles.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(autoprefixer())
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browsersync.reload({ stream: true }));
});


// IMAGES
gulp.task("img", function() {
    return gulp.src(paths.images.src)
        .pipe(chache(imagemin([
                  imagemin.gifsicle({interlaced: true}),
                  imagemin.jpegtran({progressive: true}),
                  imageminJpegRecompress({
                    loops: 1,
                    // min: 45,
                    // max: 75,
                    // quality parameters: low, medium, high, veryhigh
                    quality:'low'
                  }),
                  imagemin.svgo(),
                  imagemin.optipng({optimizationLevel: 5}),
                  pngquant({quality: '65-70', speed: 5})
              ])))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browsersync.reload({ stream: true }));
});


// FACICON GENERATOR
gulp.task("favicons", function() {
    return gulp.src("src/img/favicons/*.{jpg,jpeg,png,gif}")
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
        .pipe(gulp.dest("dest/img/favicons/"));
});


// SCRIPTS
gulp.task("scripts", function() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(concat("scripts.js"))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browsersync.reload({ stream: true }));
});


// CLEAN
gulp.task("clean", function() {
    return del(["build/*"]);
});

gulp.task("clearImgCache", function () {
    return cache.clearAll();
});


// SERVER
gulp.task("serve", function() {
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
            console.log(" Ошибки ngrok --> " + (err == null ? "их нет" : err) );
        });
    });
});


// WATCH
gulp.task("watch", function() {
    watch(paths.html.src, gulp.series("html"));
    watch(paths.styles.src, gulp.series("styles"));
    watch(paths.images.src, gulp.series("img"));
    watch(paths.scripts.src, gulp.series("scripts"));
});


// BUILD
gulp.task("src", gulp.series("clean", 
    gulp.parallel("html", "styles", "img", "favicons", "scripts")));
    
gulp.task("build", gulp.series("clean", 
    gulp.parallel("html", "styles", "img", "favicons", "scripts")));
    
gulp.task("default", gulp.series("src",
    gulp.parallel("watch", "serve")));
