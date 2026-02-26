require('dotenv').config();

const app = require('./src/app')
const connectDB = require('./src/config/database')




connectDB()
app.listen( port = process.env.PORT || 3000 ,()=>{
    console.log("server is started on port " + port);
})