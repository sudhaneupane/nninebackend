import mongoose from 'mongoose'
const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        trim:true,
    },
    phone:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
})

export const Student = mongoose.model("Student",studentSchema)