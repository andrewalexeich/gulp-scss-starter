"use strict";

import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("serve", () => {
    browsersync.init({
        server: "./dist/",
        port: 4000,
        notify: true
    });

    gulp.watch(["./src/**/*.html"], gulp.parallel("views"));
    gulp.watch([
        "./src/blocks/**/*.scss",
        "./src/styles/**/*.scss"], gulp.parallel("styles")
    );
    gulp.watch([
        "./src/blocks/**/*.js",
        "./src/js/**/*.js"], gulp.parallel("scripts")
    );
    gulp.watch(["./src/img/svg/*.svg"], gulp.parallel("sprites"));
    gulp.watch(["./src/img/**/*.{jpg,jpeg,png,gif,svg}"], gulp.parallel("images"));
    gulp.watch(["./src/img/**/*_webp.{jpg,jpeg,png}"], gulp.parallel("webp"));
    gulp.watch(["./src/fonts/**/*.{woff,woff2}"], gulp.parallel("fonts"));
});