global.$ = {
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    bs: require("browser-sync").create(),
    autoprefixer: require("gulp-autoprefixer"),
    babel: require("gulp-babel"),
    uglify: require("gulp-uglify"),
    sass: require("gulp-sass"),
    mincss: require("gulp-clean-css"),
    sourcemaps: require("gulp-sourcemaps"),
    rename: require("gulp-rename"),
    imagemin: require("gulp-imagemin"),
    pngquant: require("imagemin-pngquant"),
    imageminJpegRecompress: require("imagemin-jpeg-recompress"),
    favicons: require("gulp-favicons"),
    iconfont: require("gulp-iconfont"),
    iconfontcss: require("gulp-iconfont-css"),
    replace: require("gulp-replace"),
    rigger: require("gulp-rigger"),
    newer: require("gulp-newer"),
    plumber: require("gulp-plumber"),
    debug: require("gulp-debug"),
    watch: require("gulp-watch"),

    path: {
        tasks: require("./gulp/config.js")
    }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

// BUILD
$.gulp.task("default", $.gulp.series("iconfont",
    $.gulp.parallel("html", "styles", "favicons", "images", "scripts"),
    $.gulp.parallel("watch", "serve")
));