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
    phone:{
        type:Number,
        required:true,
    },
    schoolCollegeName:{
        type:String,

    },
    levelOfEducation:{  //level of education
        type:String,
        required:true,
    },
    ourses:{
        type:String,
        required:true,
    },
  
    message:{
        type:String,
    }, 
},
{
    timestamps:true
})

export const Enroll = mongoose.model("Enroll",EnrollModel)