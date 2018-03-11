module.exports = function() {
    $.gulp.task("scripts", function() {
        return $.gulp.src("./src/js/**/*.js")
            .pipe($.gp.uglify())
            .pipe($.gp.rename({suffix: ".min"}))
            .pipe($.gulp.dest("./dest/js/"))
            .pipe($.gp.debug({"title": "scripts"}))
            .on("end", $.bs.reload);
    });
}