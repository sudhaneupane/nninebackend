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


// routes import 
import enrollRouter from "./router/enroll.router.js"

// routes declaration
app.use('/api/v1/enroll',enrollRouter)

export {app}