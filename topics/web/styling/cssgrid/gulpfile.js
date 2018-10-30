let gulp = require('gulp');
let browserSync = require('browser-sync').create();

gulp.task('watch', () => {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["./*.html", "./*.css"]).on('change', browserSync.reload);
});