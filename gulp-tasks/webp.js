"use strict";

import gulp from "gulp";
import gulpif from "gulp-if";
import imageminWebp from "imagemin-webp";
import webp from "gulp-webp";
import rename from "gulp-rename";
import debug from "gulp-debug";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("webp", () => {
    return gulp.src("./src/img/**/*_webp.{jpg,jpeg,png}")
        .pipe(webp(gulpif(production, imageminWebp({
            lossless: true,
            quality: 100,
            alphaQuality: 100
        }))))
        .pipe(rename(function(path) {
            path.basename = path.basename.replace("_webp", "");
        }))
        .pipe(gulp.dest("./dist/img/"))
        .pipe(debug({
            "title": "WebP images"
        }));
});