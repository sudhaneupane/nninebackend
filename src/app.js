import express from 'express';
import cors from 'cors'
const app = express();//created express app::
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"20kb"}))//accept the json from frontend
app.use(express.static("public"))

// Serve static files from the "public" directory
app.use(express.static("public"));
//router import :
import enrollUser from './router/enroll.router.js'

//router declaration ::
app.use('/api/v1/courses',enrollUser)


// routes declaration
app.use('/',(req,res)=>{
    res.send("this is main hai")
})

export {app}