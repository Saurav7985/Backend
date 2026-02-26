 const express = require('express')
 const cors = require('cors')
 const quaryRouter = require('./routes/quary.routes')

 
 const app = express();

 app.use(express.json());
 app.use('/api/quary',quaryRouter)
//  app.use(cors())
 app.use(express.static('public'))



 module.exports = app