import express from 'express';
import cors from 'cors'
const app = express();//created express app::
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"20kb"}))//accept the json from frontenda
// Serve static files from the "public" directory
app.use(express.static("public"));

//router import :
import enrollUser from './router/enroll.router.js'
import dashboardRouter from './router/dashboard.router.js'
// import userRouter from './router/user.router.js'
// import employeeRouter from './router/employee.router.js'
import studentRouter from './router/student.router.js'
import courseRouter from './router/course.router.js'
// import attendanceRouter from './router/attendance.router.js'

//router declaration ::
app.use('/api/v1/enrollment',enrollUser)
app.use('/api/v1/dashboard',dashboardRouter)
// app.use('/api/v1/user',userRouter)
// app.use('/api/v1/employee',employeeRouter)
app.use('/api/v1/student',studentRouter)
app.use('/api/v1/course',courseRouter)
// app.use('/api/v1/attendance',attendanceRouter)

// routes declaration
app.use('/',(req,res)=>{
    res.send("this is main hai")
})
export {app}