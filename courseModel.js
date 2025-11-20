const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({

    Cname:{
        type:String,
        required:true
    },
        description:{
        type:String,
        required:true,
    
    },
      duration:{
        type:String,
        required:true,
       
    },
      level:{
        type:String,
        required:true
    
    },
    fees:{
        type:String,
        required:true
    
    },
       syllabus:{
        type:String,
        required:true
    
    },
    
       faculty:{
        type:String,
        required:true
    
    },
    
       image:{
        type:String,
        required:true
    
    }
   
    
})
const course = mongoose.model("course",courseSchema)
module.exports = course