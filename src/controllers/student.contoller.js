// import {Student} from '../models/student.model.js'
// import {asyncHandler} from '../utils/asyncHandler.js'

// const studentInfo =asyncHandler(async(req,res)=>{

//     const {name,email,phone}=req.body;
//     console.log(name,email,phone)

//     if (![email, name,phone,Course].every((field) => typeof field === 'string' && field.trim() !== "")) {
//         return res.status(400).json({ success: false, msg: "All fields are required" });
//     }

//     try {
//         const student=await Student.create({
//             name,
//             phone,
//             email,
//         })
//         res.status(401).json({msg:"success"})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({success:false, msg:"error occured while saving data"})
//     }
// })

// export {
//     studentInfo
// }