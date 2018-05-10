var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('styles/sass/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('styles/css'))
});
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
})

gulp.task('sass', function () {
    return gulp.src('styles/sass/**/*.scss') // Gets all files ending with .scss in example/scss
        .pipe(sass())
        .pipe(gulp.dest('styles/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('styles/sass/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('scripts/*.js', browserSync.reload);
});