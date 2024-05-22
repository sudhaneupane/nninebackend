import mongoose from 'mongoose'
const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,

    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    },
    },
{
    timestamps:true
})

export const Employee = mongoose.model("Employee",employeeSchema)