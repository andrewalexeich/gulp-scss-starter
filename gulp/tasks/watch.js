module.exports = function() {
    $.gulp.task("watch", function() {
        return new Promise((res, rej) => {
            $.gp.watch("./src/**/*.html", $.gulp.series("html"));
            $.gp.watch("./src/styles/**/*.sass", $.gulp.series("styles"));
            $.gp.watch(["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/icons/svg/*.svg", "!./src/img/favicons/*.{jpg,jpeg,png,gif}"], $.gulp.series("images"));
            $.gp.watch("./src/img/icons/svg/*.svg", $.gulp.series("svg"));
            $.gp.watch("./src/js/**/*.js", $.gulp.series("scripts"));
            res();
        });
    });
};