var gulp = require('gulp'),
  watch = require('gulp-watch'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  mocha = require('gulp-mocha'),
  to5 = require('gulp-babel');

gulp.task('babel', function() {
  return gulp.src('**/*.es6')
    .pipe(sourcemaps.init())
    .pipe(to5({
      experimental: true,
      loose: 'all'
    }))
    .pipe(sourcemaps.write())
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('test', ['babel'], function() {
  return gulp.src('test.js')
    .pipe(mocha());
});

gulp.task('default', ['test'], function() {
  gulp.watch('**/*.es6', ['test']);
});
