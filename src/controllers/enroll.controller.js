import { asyncHandler } from "../utils/asyncHandler.js";

const enrollUser=asyncHandler(async(req,res)=>{
    res.status(200).json({
        msg:"Successfully enrolled",
        success:true
    })
})

export {enrollUser}