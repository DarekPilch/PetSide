var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
      }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
});
//Scaklanie wszystkich plików i wyszukiwanie błędów


gulp.task('default', function() {
  gulp.watch('./scss/**/*.scss',['sass']);
});
//Obserwowanie plików - slajd 18
