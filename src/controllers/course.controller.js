import {Course} from '../models/course.model.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const courseInfo=asyncHandler(async(req,res)=>{
    const {startDate,courseName,teacherName,duration}=req.body
    if (![startDate,courseName,teacherName,duration].every((field) => typeof field === 'string' && field.trim() !== "")) {
        return res.status(400).json({ success: false, msg: "All fields are required" });
    }

    try {
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

export {courseInfo}