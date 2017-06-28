const gulp = require('gulp')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const config = require('../config')

module.exports = (env, browserSync) => {
  const outputFilename = env.prod
    ? 'main.min.css'
    : 'main.css'
  const plugins = [
    autoprefixer({
      browsers: ['last 3 versions', 'not ie < 10'],
    }),
  ]

  let stream = gulp.src(config.CSS_SRC)

  if (env.prod) {
    // TODO: Add plugins for production build
  }

  return stream.pipe(sourcemaps.init())
    .pipe(concat(outputFilename))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.CSS_DEST))
    .pipe(browserSync.stream())
}