const mongoose = require('mongoose')
const deptSchema = new mongoose.Schema({

    Dname:{
        type:String,
        required:true
    },
        overview:{
        type:String,
        required:true,
    
    },
      courses:{
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
       dept:{
        type:String,
        required:true
    
    },
       image:{
        type:String,
        required:true
    
    }
   
    
})
const dept = mongoose.model("dept",deptSchema)
module.exports = dept