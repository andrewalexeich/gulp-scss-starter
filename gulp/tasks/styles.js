module.exports = function() {
    $.gulp.task("styles", function() {
        return $.gulp.src("./src/styles/**/main.scss")
            .pipe($.gp.plumber())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.cleanCSS({compatibility: "ie8"}))
            .pipe($.gp.rename({ suffix: ".min" }))
            .pipe($.gp.autoprefixer())
            .pipe($.gp.replace("../../dest/", "../"))
            .pipe($.gp.plumber.stop())
            .pipe($.gp.sourcemaps.write("./maps"))
            .pipe($.gulp.dest("./dest/styles/"))
            .pipe($.debug({"title": "styles"}))
            .on("end", $.bs.reload);
    });
};
