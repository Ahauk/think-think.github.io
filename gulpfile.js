const minimist = require('minimist')
const browserSync = require('browser-sync').create()
const tasks = require('./gulp/tasks')

const argv = minimist(process.argv.slice(2))
const env = { prod: argv.prod }

tasks.styles(env, browserSync)
