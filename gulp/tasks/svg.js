module.exports = function() {
    $.gulp.task("svg", function() {
        return $.gulp.src("./src/img/svg/icons/*.svg")
            .pipe($.gp.cheerio({
                run: function($) {
                    $("[fill]").removeAttr("fill");
                    $("[stroke]").removeAttr("stroke");
                    $("[style]").removeAttr("style");
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.gp.replace("&gt;", ">"))
            .pipe($.svgSprite({
                shape: {
		            dimension: {
    			        maxWidth: 32,
    			        maxHeight: 32
		            }
	            },   
                mode: {
    				css: {
    					dest: "./",
    					layout: "horizontal",
    					sprite: "sprite.svg",
    					bust: false,
    					render: {
    						css: { }
    					}
    				}
    			},
    			variables: {
    				mapname: "icons"
    			}
            }))
            .pipe($.gulp.dest("./dest/img/svg/sprites/"))
            .pipe($.gp.debug({"title": "sprites"}));
    });
};