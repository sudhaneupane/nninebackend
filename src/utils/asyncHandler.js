
const asyncHandler=(func)=>async(req,res,next)=>{
    try {
        await func(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            msg:error.message,
            success:false
        })
    }
}

export {asyncHandler}