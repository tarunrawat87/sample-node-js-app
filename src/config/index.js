const confidence = require('confidence')
const logger = require('../logger')
const store = new confidence.Store()
store.load(require('../config/config.json'))
logger.info('Config Loaded')
module.exports = store
