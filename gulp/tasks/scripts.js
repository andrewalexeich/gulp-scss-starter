module.exports = function() {
    $.gulp.task("scripts", function() {
        return $.gulp.src(["./src/js/**/*.js", "./src/vendor/jquery/dist/jquery.js"])
            .pipe($.gp.babel({presets: ["env"]}))
            .pipe($.gp.uglify())
            .pipe($.gp.rename({suffix: ".min"}))
            .pipe($.gulp.dest("./dest/js/"))
            .pipe($.debug({"title": "scripts"}))
            .on("end", $.bs.reload);
    });
};