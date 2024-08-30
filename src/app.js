import express from "express";
import cors from "cors";
const app = express(); //created express app::
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" }));

app.use(express.static("public"));
import dashboardRouter from "./router/dashboard.router.js";
import studentRouter from "./router/student.router.js";
import courseRouter from "./router/course.router.js";
import attendanceRouter from "./router/attendance.router.js";
import scheduleRouter from "./router/schedule.router.js";
import quizRouter from "./router/quiz.router.js";

app.use("/api/v1/dashboard", dashboardRouter);
// app.use('/api/v1/user',userRouter)app.use("/api/v1/employee", employeeRouter);
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/attendance", attendanceRouter);

app.use("/api/v1/courses", courseRouter);

app.use("/api/v1/schedule", scheduleRouter);
// routes declaration

app.use("/", (req, res) => {
  res.send("🆗");
});
export { app };
