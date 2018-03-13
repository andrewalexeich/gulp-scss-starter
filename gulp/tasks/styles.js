module.exports = function() {
    $.gulp.task("styles", function() {
        return $.gulp.src("./src/styles/**/*.sass")
            .pipe($.gp.plumber())
            .pipe($.gp.sass())
            .pipe($.cleanCSS({compatibility: "ie8"}))
            .pipe($.gp.rename({ suffix: ".min" }))
            .pipe($.gp.autoprefixer())
            .pipe($.gp.plumber.stop())
            .pipe($.gulp.dest("./dest/styles/"))
            .pipe($.debug({"title": "styles"}))
            .on("end", $.bs.reload);
    });
};