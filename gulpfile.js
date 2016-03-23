var gulp = require('gulp'),
  coffee = require('gulp-coffee'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  gutil  = require('gulp-util');

gulp.task('build', function() {
  gulp.src('*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js'}))
    .pipe(gulp.dest('./'));
});

gulp.task('default', [], function() {
  gulp.watch('*.coffee', ['build'])
});
