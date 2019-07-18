const knex = require('knex')
const app = require('./app')
const logger = require('./logger')
const { PORT, DB_URL, NODE_ENV } = require('./config')

const db = knex({
  client: 'pg',
  connection: DB_URL,
})

app.set('db', db)

app.listen(PORT, () => {

    logger.info(`Server starting in ${NODE_ENV}`)
    logger.info(`Server listening at http://localhost:${PORT}`)

    console.log(`Server listening at http://localhost:${PORT}`)
})
