import mongoose, { Schema } from 'mongoose'

const EnrollModel = new Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
        
    },
    Number:{
        type:Number,
        required:true,
    },
    loe:{
        type:String,
        required:true,
    },
    preferedCourse:{
        type:String,
        required:true,
    },
    cBTime:{
        type:String,
        required:true,
    },
    source:{
        type:String,
        required:true,
    }, 
},
{
    timestamps:true
})

export const Enroll = mongoose.model("Enroll",EnrollModel)