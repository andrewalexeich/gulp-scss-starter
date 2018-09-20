module.exports = function() {
    $.gulp.task("scripts", function() {
        return $.gulp.src("./src/js/**/main.js")
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.babel({ presets: ["@babel/preset-env"]}))
            .pipe($.gp.uglify())
            .pipe($.gp.rename({suffix: ".min"}))
            .pipe($.gp.sourcemaps.write("./maps"))
            .pipe($.gulp.dest("./dest/js/"))
            .pipe($.debug({"title": "scripts"}))
            .on("end", $.bs.reload);
    });
};