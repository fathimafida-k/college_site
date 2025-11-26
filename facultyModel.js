const mongoose = require('mongoose')
const facultySchema = new mongoose.Schema({

    Fname:{
        type:String,
        required:true
    },
        dept:{
        type:String,
        required:true,
    
    },
      desg:{
        type:String,
        required:true,
       
    },
      exp:{
        type:String,
        required:true
    
    },
     email:{
        type:String,
        required:true
    
    },
    qual:{
        type:String,
        required:true
    
    },
       
    
       profile:{
        type:String,
        required:true
    
    }
   
    
})
const faculty = mongoose.model("faculty",facultySchema)
module.exports = faculty