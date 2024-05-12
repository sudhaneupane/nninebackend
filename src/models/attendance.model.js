import mongoose from 'mongoose'
attendanceSchema = mongoose.Schema({
    date:{
        type:Date,
        required:true,

    },
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee',
        required:true,
    },
    time:{
        type:String,
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",

    },
    status:{
        type:String,
        enum:['present','absent','late'],
        default:present,
    },
    comments:{
        type:String,
    },
    duration:{
        type:String,
    },
    

})
export const Attendance = mongoose.model("Attendance",attendanceSchema)