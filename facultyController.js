const faculty = require('./facultyModel')
exports.addFacultyController = async (req, res) => {
  console.log("inside project controller");

  console.log(req.body);
  
  const { Fname,dept,desg,exp,qual,email} = req.body;

 
  const profile=req.file.filename

  try {
    const newFaculty = new faculty( { Fname,dept,desg,exp,email,qual,profile});

    await newFaculty.save();
    res.status(200).json(newFaculty);
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Something went wrong while adding faculty." });
  }
}
exports.getAllFacultyController=async(req,res)=>{



  try{
    const getFaculty=await faculty.find()
    res.status(200).json(getFaculty)
  }
  catch(err){
    res.status(401).json(err)
    
  }

}
exports.deleteFaculty=async(req,res)=>{
  const{id}=req.params
  
   try{
    const deleteFaculty=await faculty.findByIdAndDelete({_id:id})
    res.status(200).json(deleteFaculty)

   }
   catch(err){
    console.log(err);
    
   }
}

exports.editFaacultyController = async (req, res) => {
  const { id } = req.params;
  const { Fname, dept, desg, exp, qual, email } = req.body;

  try {

    const existingFaculty = await faculty.findById(id);

    if (!existingFaculty) {
      return res.status(404).json("Faculty not found");
    }

    
    const uploadImage = req.file ? req.file.filename : existingFaculty.profile;

  
    const updatedFaculty = await faculty.findByIdAndUpdate(
      { _id: id },
      { Fname, dept, desg, exp, qual, email, profile: uploadImage },
      { new: true }
    );

    res.status(200).json(updatedFaculty);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
