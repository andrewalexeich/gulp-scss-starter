var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browsersync = require("browser-sync").create(),
    reload = browsersync.reload,
    autoprefixer = require("gulp-autoprefixer"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    cleanCSS = require("gulp-clean-css"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    svgo = require("gulp-svgo"),
    image = require("gulp-image"),
    favicons = require("gulp-favicons"),
    plumber = require("gulp-plumber"),
    filter = require("gulp-filter"),
    del = require("del");
    

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
        exclude: ["src/img/**/*.*", "!src/img/fav/*.*"],
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
        .pipe(f)
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            guetzli: false,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(f.restore)
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browsersync.reload({ stream: true }));
});


// FACICON GENERATOR
gulp.task("favicons", function() {
    return gulp.src("src/img/fav/fav.png")
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
        .pipe(gulp.dest("dest/img/fav/"));
});


// SCRIPTS
gulp.task("scripts", function() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(concat("main.js"))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browsersync.reload({ stream: true }));
});


// FILTER
var f = filter(paths.images.exclude, {
    restore: true
});


// CLEAN
gulp.task("clean", function() {
    return del(["./build/*"]);
});


// SERVER
gulp.task("serve", function() {
    browsersync.init({
        server: "dest"
    });
});


// WATCH
gulp.task("watch", function() {
    gulp.watch(paths.html.src, gulp.series("html"));
    gulp.watch(paths.styles.src, gulp.series("styles"));
    gulp.watch(paths.images.src, gulp.series("img"));
    gulp.watch(paths.scripts.src, gulp.series("scripts"));
});


// BUILD
gulp.task("src", gulp.series("clean", 
    gulp.parallel("html", "styles", "img", "favicons", "scripts")));
    
gulp.task("build", gulp.series("clean", 
    gulp.parallel("html", "styles", "img", "favicons", "scripts")));
    
gulp.task("default", gulp.series("src",
    gulp.parallel("watch", "serve")));