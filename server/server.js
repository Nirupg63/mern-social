import app from './express'
import { MongoClient } from 'mongodb'
import config from './../config/config'

//comment out before building for production
import devBundle from './devBundle'

//comment out before building for production
devBundle.compile(app)

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

// Database Connection URL
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
// Use connect method to connect to the server
MongoClient.connect(url, (err, db)=>{
  console.log("Connected successfully to mongodb server")
  db.close()
})
