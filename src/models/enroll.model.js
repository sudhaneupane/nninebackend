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
    number:{
        type:Number,
        required:true,
    },
    loe:{  //level of education
        type:String,
        required:true,
    },
    preferedCourse:{
        type:String,
        required:true,
    },
    college:{    
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