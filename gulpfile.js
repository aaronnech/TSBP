var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodeunit = require('gulp-nodeunit');
 
gulp.task('default', ['bundleClient', 'moveStatic']);

gulp.task('compileTS', function() {
	var tsResult = gulp
				.src('src/**/*.ts')
				.pipe(ts({
					noEmitOnError : true,
					module: 'commonjs',
					outDir: 'bin'
				}));


	return tsResult.js.pipe(gulp.dest('./bin'));
});

gulp.task('bundleReact', ['compileTS'], function() {
	
});

gulp.task('bundleClient', ['compileTS'], function() {
    gulp.src('src/client/main.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});


gulp.task('moveStatic', function() {
	var vendors = gulp
				.src('src/client/static/*');

	return vendors.pipe(gulp.dest('./bin/client/static'));
});

gulp.task('test', function() {
    var tests = gulp.src('bin/**/*.test.js');

    tests.pipe(nodeunit());
});