import User from '../models/user.model.js'
const checkUser = async(req,res)=>{
    //retrieve data from frontend::
    //check if empty
    //check if user exist or not with that email
    //if match then compare password 
    //if password match then successfully send the response:

    const {email,password}  = req.body
    console.log(email,password)
    if(!email||!password){
        res.status(401).json({error:"All the fields are required"})
    }
    const checkUser = await User.findOne({email});
    console.log(checkUser)

}
const addUser = async(req,res)=>{
    const {email,password} = req.body

    const createdCheck = await User.create({
        email,
        password,
    })
    if(createdCheck){
        res.status(201).send("success happen")
    }
}
export {checkUser, addUser}