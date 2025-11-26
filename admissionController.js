const admission = require('./admissionModel')
exports.newAdmissionController = async (req, res) => {
  console.log("inside project controller");

  console.log(req.body);
  
  const { Sname,mail,phone,address,course,qualification,grade} = req.body;

 


  try {
    const newAdmission = new admission({ Sname,mail,phone,address,course,qualification,grade});

    await newAdmission.save();
    res.status(200).json(newAdmission);
  } catch (err) {
    console.error(err);
    res.status(401).json(err);
  }
}
exports.getAdmissionController=async(req,res)=>{



  try{
    const getAdmission=await admission.find()
    res.status(200).json(getAdmission)
  }
  catch(err){
    res.status(401).json(err)
    
  }

}