const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('erro', sass.logError))
        .pipe(gulp.dest('./css/'));
});

// gulp.task('js', function () {
//     return gulp.src('./js/*.js')
//         .pipe(concat('custom.js'))
//         .pipe(minify())
//         .pipe(uglify())
//         .pipe(gulp.dest('/js'))
// });

gulp.task('js', function() {
    gulp.src('./js/*.js')
        .pipe(concat('custom.js'))
        .pipe(minify())
        .pipe(gulp.dest('./js'))
});


// Watch Task
gulp.task('default', function () {
    gulp.watch('./sass/*.scss', gulp.series('sass'));
    gulp.watch('./js/*.js', gulp.series('js'));
});
gulp.task('watch', gulp.series('default', 'sass', 'js'));







