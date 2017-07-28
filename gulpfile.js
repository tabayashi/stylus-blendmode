'use strict';
var gulp    = require('gulp');
var mocha   = require('gulp-mocha');
var pug     = require('gulp-pug');
var stylus  = require('gulp-stylus');
var plumber = require('gulp-plumber');
var server  = require('gulp-webserver');

gulp.task('spec', function() {
  return gulp
    .src(['spec/**/*.js'], {read: false})
    .pipe(plumber())
    .pipe(mocha());
});

gulp.task('html', function() {
  return gulp
    .src('spec/**/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./dest'));
});

gulp.task('css', function() {
  return gulp
    .src('spec/**/*.styl')
    .pipe(plumber())
    .pipe(stylus({
      define: {
        blendmode: require('./src'),
      },
    }))
    .pipe(gulp.dest('./dest'));
});

gulp.task('server', function() {
  return gulp
    .src('dest')
    .pipe(server({ livereload: true, port: 8080, open: true }));
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.js', 'spec/**/*.js'], ['spec']);
  gulp.watch('spec/**/*.pug', ['html']);
  gulp.watch('spec/**/*.styl', ['css']);
});

gulp.task('default', ['watch', 'server']);
