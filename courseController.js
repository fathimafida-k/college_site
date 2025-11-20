const course = require('./courseModel')

exports.addCourseController = async (req, res) => {
  console.log("inside project controller");

  console.log(req.body);
  
  const { Cname,description,duration,level,fees,syllabus,faculty} = req.body;

 
  const image=req.file.filename

  try {
    const newCourse = new course({ Cname,description,duration,level,fees,syllabus,faculty,image
    });

    await newCourse.save();
    res.status(200).json(newCourse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong while adding property." });
  }
}


exports.getAllCoursesController=async(req,res)=>{



  try{
    const getCourses=await course.find()
    res.status(200).json(getCourses)
  }
  catch(err){
    res.status(401).json(err)
    
  }

}
exports.getCoursesbyIdController=async(req,res)=>{

const {id} = req.params

  try{
    const getCourses=await course.findById(id)
    res.status(200).json(getCourses)
  }
  catch(err){
    res.status(401).json(err)
    
  }

}

exports.deleteCourse=async(req,res)=>{
  const{id}=req.params
  
   try{
    const deleteCourse=await course.findByIdAndDelete({_id:id})
    res.status(200).json(deleteCourse)

   }
   catch(err){
    console.log(err);
    
   }
}

exports.editCourseController = async (req, res) => {
  const { id } = req.params; // Course ID from URL
  console.log(id);
  
  const { Cname, description, duration, level, fees, syllabus, faculty } = req.body;

  // Get uploaded image filename if a new one is selected
  const uploadImage = req.file ? req.file.filename : undefined;

  try {
    // Build the update object
    const updateData = { Cname, description, duration, level, fees, syllabus, faculty };
    if (uploadImage) updateData.image = uploadImage;

    // Update the course by ID
    const updatedCourse = await course.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedCourse) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Course updated successfully',
      data: updatedCourse,
    });

  } catch (err) {
    console.error('Edit Course Error:', err);
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred',
      details: err.message,
    });
  }
};