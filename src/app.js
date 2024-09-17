import express from "express";
import cors from "cors";
// import bodyParser from "body-parser";
const app = express(); //created express app::
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" }));
// app.use(bodyParser.json());

app.use(express.static("public"));
import dashboardRouter from "./router/dashboard.router.js";
import studentRouter from "./router/student.router.js";
import courseRouter from "./router/course.router.js";
import attendanceRouter from "./router/attendance.router.js";
import instructorRouter from "./router/instructor.router.js";
import scheduleRouter from "./router/schedule.router.js";
import userRouter from "./router/user.router.js";
// import quizRouter from "./router/quiz.router.js";

app.use("/api/v1/dashboards", dashboardRouter);
// app.use('/api/v1/user',userRouter)app.use("/api/v1/employee", employeeRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/attendances", attendanceRouter);

app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/instructors", instructorRouter);
app.use("/api/v1/schedules", scheduleRouter);
app.use("/api/v1/users", userRouter);
// routes declaration

// app.use("/", (req, res) => {
//   res.send("🆗");
// });
export { app };
