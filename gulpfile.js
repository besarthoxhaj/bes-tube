/**
 * Main project gulpfile
 */

const gulp = require('gulp');
const SvgSymbols = require('./internals/gulp/svg-symbols');
const UpdateHtml = require('./internals/gulp/update-html');

const paths = {
  sass: './sass/**/*.scss',
  svgs: './assets/svg/*.svg',
  symbols: './assets/svg-symbols.html',
};

gulp.task('svg-symbols', SvgSymbols({source: paths.svgs}));
gulp.task('update-html', UpdateHtml({}));

gulp.task('watch', () => {
  gulp.watch(paths.svgs, ['svg-symbols']);
  gulp.watch(paths.symbols, ['update-html']);
});

gulp.task('default', [
  'svg-symbols',
  'update-html',
  'watch',
]);
