require('dotenv').config()
const express =require('express')
const cors =require('cors')
const collegeServer= express()
const router = require('./router')
require('./dbConnection')
collegeServer.use(cors())
collegeServer.use(express.json())
collegeServer.use(router)
collegeServer.use('/uploads',express.static('./uploads'))
PORT=process.env.PORT||3000
collegeServer.listen(PORT,()=>{
    console.log("college Server running at port number",PORT);
    
})
