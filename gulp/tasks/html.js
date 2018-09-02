module.exports = function() {
    $.gulp.task("html", function() {
        return $.gulp.src(["./src/views/**/*.html", "!./src/views/blocks/*.html"])
            .pipe($.rigger())
            .pipe($.gp.replace("../dest/", "../"))
            .pipe($.gulp.dest("./dest/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.bs.reload);
    });
};