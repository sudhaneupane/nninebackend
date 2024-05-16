import {Student} from '../models/student.model.js'
import {asyncHandler} from '../utils/asyncHandler.js'

const studentInfo =asyncHandler(async(req,res)=>{

    const {name,email,phone,course}=req.body;

    if (![email, name,phone,course].every((field) => typeof field === 'string' && field.trim() !== "")) {
        return res.status(400).json({ success: false, msg: "All fields are required" });
    }

    try {
        const existingStudent=await Student.findOne({
            name,
            phone,
            email,
            course
        })
        if(existingStudent){
            return res.status(409).json({msg:"Student already exists"})
        }
        const student=await Student.create({
            name,
            phone,
            email,
            course
        })

        res.status(201).json({msg:"success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, msg:"error occured while saving data"})
    }
})

const getStudentDetail=asyncHandler(async(req,res)=>{
    try {
        const studentDetail=await Student.find({})
        res.status(200).json(studentDetail)
    } catch (error) {
        console.log(error);
    }
})

export {
    studentInfo,
    getStudentDetail
}