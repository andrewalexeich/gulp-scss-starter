module.exports = function() {
    $.gulp.task("sprite", function() {
        return $.gulp.src("./src/img/icons/svg/*.svg")
            //.pipe($.replace("&gt;", ">"))
            .pipe($.svgSprite({
				preview: false,
                cssFile: "../../../src/styles/partials/_sprite.scss",
				svg: {
					sprite: "../../../dest/img/sprites/sprite.svg"
				}
            }))
            .pipe($.gulp.dest("./dest/img/sprites/"))
            .pipe($.debug({"title": "sprite"}));
    });
};