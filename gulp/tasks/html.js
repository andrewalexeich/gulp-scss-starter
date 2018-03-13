module.exports = function() {
    $.gulp.task("html", function() {
        return $.gulp.src("./src/**/*.html")
            .pipe($.gulp.dest("./dest/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.bs.reload);
    });
};