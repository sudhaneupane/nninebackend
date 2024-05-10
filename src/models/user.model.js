import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userModel = mongoose.Schema({
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    }
})
userModel.pre("save",async function (next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    next()
})
const User = mongoose.model('User',userModel)
export default User