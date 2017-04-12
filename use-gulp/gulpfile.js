var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var eyeglass = require('eyeglass');

gulp.task('sass', function () {
  var options = eyeglass({
    eyeglass: {
      root: __dirname
    }
  });
  return gulp.src('*.scss')
    .pipe(gulpSass(options).on('error', gulpSass.logError))
    .pipe(gulp.dest(__dirname))
});

gulp.task('default', ['sass']);
