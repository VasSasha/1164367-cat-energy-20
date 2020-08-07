const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemap');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();

const styles = function () {
	return gulp.src('source/sass/style.scss')
	.pipe(plumber())
	.pipe(sourcemap.init())
	.pipe(sass())
	.pipe(postcss([autoprefixer()]))
	.pipe(sourcemap.write('.'))
	.pipe(gulp.dest('source/css'))
	.pipe(sync.steam())
};
const server = function () {
	sync.init({
		server: {
			baseDir: 'source'
		},
		cors: true,
		notify: false,
		ui: false,
	});
}
const watcher = function () {
	gulp.watch('source/sass/**/*.scss', gulp.series('styles'));
	gulp.watch('source/*.html').on('change', sync.reload);
}
exports.default = gulp.series(styles, server, watcher);