const homeHandler = require('./home');
const staticFiles = require('./static-files');
const catHandler = require('./cats')

module.exports = [homeHandler, staticFiles, catHandler];