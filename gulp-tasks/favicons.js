"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import favicons from "gulp-favicons";
import debug from "gulp-debug";

gulp.task("favicons", () => {
    return gulp.src(paths.favicons.src)
        .pipe(favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe(gulp.dest(paths.favicons.dist))
        .pipe(debug({
            "title": "Favicons"
        }));
});