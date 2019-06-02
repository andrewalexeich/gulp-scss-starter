"use strict";

import gulp from "gulp";
import clean from "gulp-clean";
import debug from "gulp-debug";

gulp.task("clean", () => {
    return gulp.src("./dist/*", {read: false})
        .pipe(clean())
        .pipe(debug({
            "title": "Cleaning..."
        }));
});