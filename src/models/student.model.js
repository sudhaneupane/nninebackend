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
    Course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }
})

export const Student = mongoose.model("Student",studentSchema)