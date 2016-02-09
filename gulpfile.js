'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps');

gulp.task('compileSass', function(){
  return gulp.src('scss/app.scss')
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./'))
  .pipe(gulp.dest('.'))
});


gulp.task('watchFiles', function(){
  gulp.watch('scss/**/*.scss', ['compileSass']);
});

gulp.task('serve', ['watchFiles']);

gulp.task("default", function(){
  gulp.start('compileSass');
});
