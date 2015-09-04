var gulp = require('gulp');
var server = require('gulp-server-livereload');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');

gulp.task('serve', function() {
  gulp.src('./app')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('copy-html-files', function() {
	gulp.src(['./app/**/*.html', './app/*.json', '!/app/index.html'], {base: './app'})
	.pipe(gulp.dest('build/'));
});

gulp.task('usemin', function() {
	gulp.src('./app/index.html')
	.pipe(usemin({
		css: [minifyCss(), 'concat', rev()],
		js: [uglify(), rev()]
	}))
	.pipe(gulp.dest('build/'));
});

gulp.task('build', ['usemin']);