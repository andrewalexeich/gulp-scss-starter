global.$ = {
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    bs: require("browser-sync").create(),
    autoprefixer: require("gulp-autoprefixer"),
    babel: require("gulp-babel"),
    uglify: require("gulp-uglify"),
    sass: require("gulp-sass"),
    cleanCSS: require("gulp-clean-css"),
    rename: require("gulp-rename"),
    imagemin: require("gulp-imagemin"),
    pngquant: require("imagemin-pngquant"),
    imageminJpegRecompress: require("imagemin-jpeg-recompress"),
    favicons: require("gulp-favicons"),
    svgSprite: require("gulp-svg-sprite"),
    replace: require("gulp-replace"),
    cheerio: require("gulp-cheerio"),
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
$.gulp.task("default", $.gulp.series(
    $.gulp.parallel("html", "styles", "images", "svg", "scripts"),
    $.gulp.parallel("watch", "serve")
));