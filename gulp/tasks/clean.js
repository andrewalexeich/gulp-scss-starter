module.exports = function() {
    $.gulp.task("clean", function() {
        return $.gulp.src("./dest/*", {read: false})
            .pipe($.clean())
            .pipe($.debug({"title": "clean"}));
    });
};