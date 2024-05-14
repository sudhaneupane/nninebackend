import {Employee} from '../models/employee.model.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const employeedata = asyncHandler(async(req,res)=>{
    const { email, name, phone , address} = req.body;
    
    if (![email, name,address,phone].every((field) => typeof field === 'string' && field.trim() !== "")) {
        return res.status(400).json({ success: false, msg: "All fields are required" });
    }
    try {
    const employee=await Employee.create({
        name,
        email,
        phone,
        address
    });
    res.status(201).json({ msg: "data saved successfully" });
    } catch (error){
    console.log(error)
    res.status(500).json({ success: false, msg: "An error occurred while saving the data" });
    }
})

export {employeedata}