var { src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var copy = require('gulp-copy');
var browsersync = require('browser-sync');
var del = require('del');

var cleanDist = function (done) {
  del.sync('dist/');
  return done();
};

var buildStyles = function (done) {
  return src('src/scss/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(prefix())
    .pipe(dest('dist/css'));
};

var watchSrc = function (done) {
  watch('src/', series(exports.default, reloadBrowser));
  return done();
};

var copyFiles = function (done) {
  return src(['src/**/*', '!src/scss/**', 'src/js/**/*']).pipe(dest('dist/'));
};

var startServer = function (done) {
  browsersync.init({
    server: {
      baseDir: './dist/',
    },
    browser: 'google chrome',
  });

  return done();
};

var reloadBrowser = function (done) {
  browsersync.reload();
  return done();
};

exports.default = series(cleanDist, buildStyles, copyFiles);

exports.watch = series(exports.default, startServer, watchSrc);
