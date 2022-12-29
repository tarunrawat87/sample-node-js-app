
const app = require('./src/app')
const apiLoaderModule = require('./src/bootstrap')
const logger = require('./src/logger')
const { PORT_NO } = require('./src/lib/constants')
async function bootstrap () {
  await apiLoaderModule()

  app.listen(PORT_NO, () => {
    logger.info(`app is listening on ${PORT_NO}`)
  })
}

bootstrap()
