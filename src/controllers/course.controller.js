import {Course} from '../models/course.model.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const courseInfo=asyncHandler(async(req,res)=>{
    const {startDate,courseName,teacherName,duration}=req.body
    if (![startDate,courseName,teacherName,duration].every((field) => typeof field === 'string' && field.trim() !== "")) {
        return res.status(400).json({ success: false, msg: "All fields are required" });
    }

    try {
        const existedCourse =await Course.findOne({courseName})
        if(existedCourse){
         return res.status(400).json({success:false,message:"Duplicate Course"})
        }
        const coursedetail=await Course.create({
            startDate,
            courseName,
            teacherName,
            duration
        })
        res.status(201).json({msg:"succesful"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"error occured when saving data"})
    }
})

const getCourseDetails =async(req,res)=>{
    //data fetch from database:
    //send in response
    try {
        console.log('route entered');
        const courseData = await Course.findOne({});
        console.log(courseData);
        res.status(200).json(courseData)
    } catch (error) {
        console.log(error);
        
    }

}

export {courseInfo,
    getCourseDetails
}