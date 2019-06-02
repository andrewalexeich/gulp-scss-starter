"use strict";

import gulp from "gulp";
import svg from "gulp-svg-sprite";
import debug from "gulp-debug";
import browsersync from "browser-sync";

gulp.task("sprites", () => {
    return gulp.src("./src/img/svg/*.svg")
        .pipe(svg({
            shape: {
                dest: "intermediate-svg"
            },
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest("./dist/img/sprites/"))
        .pipe(debug({
            "title": "Sprites"
        }))
        .on("end", browsersync.reload);
});