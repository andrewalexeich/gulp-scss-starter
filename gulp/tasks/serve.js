module.exports = function() {
    $.gulp.task("serve", function() {
        return new Promise((res,rej) => {
            $.bs.init({
                server: "./dest/",
                tunnel: "sitedev"
            });
        res();
        });
    });
}