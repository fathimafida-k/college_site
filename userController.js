const user = require('./userModel')
const jwt = require('jsonwebtoken')
exports.registerUserController = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
   
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            return res.status(400).json("Email already registered");
        }

   
       

        const newUser = new user({
            name,
            email,
            password,
            role
        });

        await newUser.save();

        res.status(200).json(newUser);

    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
};

exports.logincontroller=async(req,res)=>{
  console.log("inside login");
  
  const{email,password}=req.body
  console.log(req.body);
  
    try{
      const existingUser = await user.findOne({email,password})
      if(existingUser){
   
        const token = jwt.sign({userId:existingUser._id},process.env.JWT_PASSWORD)
       res.status(200).json({user:existingUser,token})
         
      }
      else{
        res.status(404).json("Invalid email or password")

      }
    }
    catch(err){
         res.status(401).json(err)
    }
  
}