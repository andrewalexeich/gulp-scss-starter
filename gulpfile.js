var gulp = require("gulp"),
    watch = require("gulp-watch"),
    browsersync = require("browser-sync").create(),
    reload = browsersync.reload,
    autoprefixer = require("gulp-autoprefixer"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    cleanCSS = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    svgo = require("gulp-svgo"),
    notify = require("gulp-notify"),
    filter = require("gulp-filter"),
    del = require("del");

var paths = {
    html: {
        src: "src/**/*.html",
        dest: "dest/"
    },

    styles: {
        src: "src/styles/**/*.sass",
        dest: "dest/styles/"
    },

    scripts: {
        src: "src/js/**/*.js",
        dest: "dest/js/"
    },

    images: {
        src: "src/img/**/*.*",
        exclude: ["src/img/**/*.*", "!src/img/fav/*.*"],
        dest: "dest/img/"
    }
};

function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest));
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass({
            errLogToConsole: false,
        }))
        .on("error", function(err) {
            server.notify(err.message, 100000);
            this.emit("end");
        })
        .pipe(cleanCSS({
            compatibility: "ie8"
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(paths.scripts.dest));
}

function images() {
    return gulp.src(paths.images.src)
        .pipe(f)
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{
                removeViewBox: true
            }],
            use: [pngquant()],
        }))
        .pipe(svgo())
        .pipe(f.restore)
        .pipe(gulp.dest(paths.images.dest));
}

function watcher() {
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}

function server() {
    browsersync.init({
        server: {
            baseDir: "./dest/"
        },
        open: true,
        notify: false
    });
    browsersync.watch("dest", browsersync.reload);
}

var f = filter(paths.images.exclude, {
    restore: true
});

function clean() {
    return del(["./dest/*"]);
}

var build = gulp.series(clean, gulp.parallel(html, styles, scripts, images), gulp.parallel(watcher, server));
gulp.task("default", build);