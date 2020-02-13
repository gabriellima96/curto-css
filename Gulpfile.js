const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('minify-css', () => {
  return gulp
    .src('css/*.css')
    .pipe(cleanCSS())
    .pipe(rename('curto.min.css'))
    .pipe(gulp.dest('dist'));
});
