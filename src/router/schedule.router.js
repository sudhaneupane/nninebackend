import { getSpecificCourse } from "../controllers/course.controller.js";
import {
  createSchedule,
  deleteSchedule,
  getAllSchedule,
  getSpecificSchedule,
  updateSchedule,
} from "../controllers/schedule.controller.js";
import { Router } from "express";

const scheduleRouter = Router();
scheduleRouter.route("/").post(createSchedule);
scheduleRouter.route("/").get(getAllSchedule);
scheduleRouter.route("/:id").get(getSpecificSchedule);
scheduleRouter.route("/:id").patch(updateSchedule);
scheduleRouter.route("/:id").delete(deleteSchedule);

export default scheduleRouter;
