module.exports = function() {
    $.gulp.task("iconfont", function() {
        return $.gulp.src("./src/img/icons/svg/*.svg")
            .pipe($.iconfontcss({
                fontName: "icons",
                targetPath: '../../src/styles/partials/_iconfont.scss',
                fontPath: '../../dest/fonts/'
            }))
            .pipe($.iconfont({
                prependUnicode: false,
                fontName: "icons",
                formats: ["ttf", "eot", "svg", "woff", "woff2"],
                normalize: true,
                fontHeight: 1001
            }))
            .pipe($.gulp.dest("./dest/fonts/"))
            .pipe($.debug({"title": "iconfont"}));
    });
};