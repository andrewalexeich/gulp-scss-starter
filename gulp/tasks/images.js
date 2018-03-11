module.exports = function() {
    $.gulp.task("images", function() {
        return $.gulp.src(["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/svg/icons/*", "!./src/img/favicons/*.{jpg,jpeg,png,gif}"])
            .pipe($.gp.newer("./dest/img/"))
            .pipe($.gp.imagemin([
                $.imagemin.gifsicle({interlaced: true}),
                $.imagemin.jpegtran({progressive: true}),
                $.imageminJpegRecompress({loops: 1, quality: "low"}),
                $.imagemin.svgo(),
                $.imagemin.optipng({optimizationLevel: 5}),
                $.pngquant({quality: "65-70", speed: 5})
            ]))
            .pipe($.gulp.dest("./dest/img/"))
            .pipe($.gp.debug({"title": "images"}))
            .on("end", $.bs.reload);
    });
}