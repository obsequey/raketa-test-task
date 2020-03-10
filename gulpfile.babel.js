const babel = require('gulp-babel')
const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')

async function transpileScripts() {
  return await src('src/app.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(dest('dist'))
}

async function transpileStyles() {
  return await src('src/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

async function transpileMarkup() {
  return await src('src/*.html')
    .pipe(dest('dist'))
}

function processAssets() {
  return src('src/img/*')
    .pipe(imagemin())
    .pipe(dest('dist/img'))
}

function watcher() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  watch('src/*.scss', transpileStyles)
  watch('src/*.js', transpileScripts).on('change', browserSync.reload)
  watch('src/*.html', transpileMarkup).on('change', browserSync.reload)
}

exports.default = series(transpileStyles, transpileScripts, transpileMarkup, processAssets, watcher)
exports.build = series(transpileStyles, transpileScripts, transpileMarkup, processAssets)
