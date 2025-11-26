const mongoose = require('mongoose')
const admissionSchema = new mongoose.Schema({

    Sname:{
        type:String,
        required:true
    },
        mail:{
        type:String,
        required:true,
    
    },
      phone:{
        type:String,
        required:true,
       
    },
      address:{
        type:String,
        required:true
    
    },
     course:{
        type:String,
        required:true
    
    },
    qualification:{
        type:String,
        required:true
    
    },
  grade:{
        type:String,
        required:true
    
    }
   
    
})
const admission = mongoose.model("admission",admissionSchema)
module.exports = admission