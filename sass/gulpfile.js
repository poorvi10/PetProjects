const gulp = require('gulp');
const sass = require("gulp-sass");
const concat = require("gulp-concat");

//var sassSrc = ['./scss/components/button.scss',];

gulp.task( 'sass', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css')) // will have every style in a single file
    .pipe(gulp.dest('./css')); // compiled css file path
});

gulp.task('sass:watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass']);
});