const rootDir = require('./utils/pkgDir')()

module.exports = {
  CSS_SRC: [
    `${rootDir}/styles/site.css`,
  ],
  CSS_DEST: [
    `${rootDir}/public/styles`,
  ],
}
