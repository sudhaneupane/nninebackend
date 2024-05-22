import mongoose,{Schema} from "mongoose";

const CourseModel=new Schema({
    startDate:{
        type:String,
        required:true
    },
    courseName:{
        type:String,
        required:true
    },
    teacherName:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    }
})
export const Course=mongoose.model("Course",CourseModel)