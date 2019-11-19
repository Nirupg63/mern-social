import app from './express'
import config from './../config/config'
import mongoose from 'mongoose'

// Database Connection URL
// const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
// Use connect method to connect to the server
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})