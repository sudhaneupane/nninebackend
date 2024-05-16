import {Attendance} from '../models/attendance.model.js'
import {asyncHandler} from '../utils/asyncHandler.js'

const attendanceRecord=asyncHandler(async(req,res)=>{
const {date,employee,time,student,status,comments,duration}=req.body
    try {
    const attendInfo=await Attendance.create({
        date,
        employee,
        time,
        student,
        status,
        comments,
        duration
    })
    res.status(201).json({success:true,msg:"Attendance recorded successfully"})
} catch (error) {
    console.log(error);
    res.status(500).json("Error occured while saving attendance")
}
/*
thunderclient post format for attendance
{
    "date": "2024-05-16T00:00:00Z",
    "employee": "60d0fe4f5311236168a109ca",
    "time": "09:00 AM",
    "student": "60d0fe4f5311236168a109cb",
    "status": "present",
    "comments": "Attended the lecture on time",
    "duration": "1 hour"
}
*/
})

const getAttendanceRecord=asyncHandler(async(req,res)=>{
    try {
        const getRecord=await Attendance.find({})
        res.status(201).json(getRecord)
    } catch (error) {
        console.log(error);
        res.status(500).json("Error retrieving attendance record")
    }
})

export {
    attendanceRecord,
    getAttendanceRecord
}