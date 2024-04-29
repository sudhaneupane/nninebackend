import { asyncHandler } from "../utils/asyncHandler.js";
import {Enroll} from "../models/enroll.model.js"

const enrollUser=asyncHandler(async(req,res)=>{
    // console.log(req.body);
    // validation - empty or not -done
    // should receive data from frontend - done
    // save -done
    // check response in mongodb
    // send response to frontend -done
    // try catch for error and success -done

   const {email,name,Number,loe,preferedCourse,college,message}=req.body
   
   if (![email, name, loe, preferedCourse, college, message].every((field) => typeof field === 'string' && field.trim() !== "")) {
    return res.status(400).json({ success: false, msg: "All fields are required" });}

    if(!Number){
        return res.status(400).json({ success: false, msg: "All fields are required" }); 
    }

    try {
        const user = await Enroll.create({
            email,
            name,
            Number,
            loe,
            preferedCourse,
            college,
            message
        });

        res.status(201).json({ msg:"User registered successfully"});
    } catch (error) {
        res.status(500).json({ success: false, msg: "An error occurred while saving user data" });
    }


})

export {enrollUser}