var gulp = require("gulp"),
    watch = require("gulp-watch"),
    server = require("browser-sync").create(),
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

function clean() {
    return del(["./dest/*"]);
}

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

var f = filter(paths.images.exclude, {
    restore: true
});

function images() {
    return gulp.src(paths.images.src)
        .pipe(f)
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            use: [pngquant()],
        }))
        .pipe(svgo())
        .pipe(f.restore)
        .pipe(gulp.dest(paths.images.dest));
}

function watch() {
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}

function livereload() {
    server.init({
        server: {
            baseDir: "./dest/"
        },
        open: true,
        notify: false
    });
    server.watch("dest", server.reload);
}

var build = gulp.series(clean, gulp.parallel(html, styles, scripts, images), livereload);
gulp.task("default", build);