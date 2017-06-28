const fs = require('fs')
const path = require('path')

function fileExists(filename) {
  try {
    fs.accessSync(filename, fs.F_OK)
    return true
  } catch (err) {
    return false
  }
}

module.exports = function pkgDir(pathname = process.cwd()) {
  const pkg = path.resolve(pathname, 'package.json')
  
  if (fileExists(pkg)) {
    return pathname
  }

  return pkgDir(path.resolve(pathname, '..'))
}
