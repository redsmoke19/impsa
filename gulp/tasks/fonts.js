const gulp = require('gulp');

// Копируем все шрифты из папки dev в dist

module.exports = function fonts() {
  return gulp
    .src('dev/static/font/**/*.*')
    .pipe(gulp.dest('dist/static/font'));
};
