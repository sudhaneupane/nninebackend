import { Enroll } from "../models/enroll.model.js";

//get api::
const getRegisterDetails = async(req,res)=>{
    try{
    const data = await Enroll.find({});
    console.log(data);
    res.status(201).json(data);
    }catch(err){
        console.log(`Error ocur while fetching data form db err:: ${err}`)
        res.status(401).json({err:"Error while fetching data"})
    }
}

export {getRegisterDetails}