module.exports = function() {
    $.gulp.task("html", function() {
        return $.gulp.src("./src/**/*.html")
            .pipe($.gp.replace("../dest/", "../"))
            .pipe($.gulp.dest("./dest/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.bs.reload);
    });
};