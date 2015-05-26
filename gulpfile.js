var gulp = require('gulp');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');
var rev = require('gulp-rev');
var inject = require("gulp-inject");
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var debug = require('gulp-debug');
var clean = require('gulp-clean');
var react = require('gulp-react');
var coffee = require('gulp-coffee');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('build-src', function () {
	var tsResult = gulp.src(['src/**/*.ts'])
		.pipe(sourcemaps.init())
		.pipe(ts({module :'commonjs',sortOutput: true}))

	return tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest('build/src'));
});

gulp.task('build-test', function () {
	var tsResult = gulp.src(['test/**/*.ts'])
		.pipe(sourcemaps.init())
		.pipe(ts({module :'commonjs',sortOutput: true}))
	return tsResult.js.pipe(sourcemaps.write()).pipe(gulp.dest('build/test'));
});


gulp.task('test',['build-src','build-test'], function () {
	return gulp.src('build/test/*.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'list'}));
});

gulp.task('scripts', function() {
	gulp.src('src/app.js')
		.pipe(browserify({
			insertGlobals : true,
			debug : !gulp.env.production
		}))
		.pipe(gulp.dest('build/js'))
});

gulp.task('babel-src', function () {
	return gulp.src('src/es6/**/*.es6')
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write('.',{includeContent: false, sourceRoot: function(){
			return '../../../src/es6/'
		}}))
		.pipe(gulp.dest('dist/src/es6'));
});

gulp.task('babel-test', function () {
	return gulp.src('test/es6/**/*.es6')
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(sourcemaps.write('.',{includeContent: false, sourceRoot: '../../../test/es6/'}))
	.pipe(gulp.dest('dist/test/es6'));
});

gulp.task('babel-test-run',['babel-src','babel-test'], function () {
	return gulp.src('dist/test/es6/*.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'nyan'}));
});
