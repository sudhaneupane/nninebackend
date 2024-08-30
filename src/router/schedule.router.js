import { Router } from "express";
import {
  getScheduleData,
  scheduleData,
  updateSchedule,
} from "../controllers/schedule.controller.js";

const scheduleRouter = Router();

// Define route for updating the schedule
scheduleRouter.route("/").post(scheduleData).get(getScheduleData);

scheduleRouter.route("/update/:id").put(updateSchedule);

export default scheduleRouter;
