const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

// make a gulp task
// Gulp 4 version

var paths = {
	styles: {
		src: 'css/styles.css',
		dest: 'build'
	}
};

function styles() {
	return gulp.src(paths.styles.src)
		.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
		}))
		.pipe(gulp.dest(paths.styles.dest));
}
gulp.task('styles', styles);

// gulp.task('styles', () =>
//   gulp.src('css/styles.css')
// 			.pipe(autoprefixer({
// 					browsers: ['last 2 versions'],
// 					cascade: false
// 			}))
// 			.pipe(gulp.dest('build'))
//
//
// );

//watch our css file, rerun our gulp task when a change is detected
function watch() {
	gulp.watch(paths.styles.src, styles);
}
exports.watch = watch;

var build = gulp.parallel(styles, watch);
gulp.task(build);
gulp.task('default', build);
