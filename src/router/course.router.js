import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourse,
  getSpecificCourse,
  updateCourse,
} from "../controllers/course.controller.js";
const router = Router();
router.route("/").post(createCourse);
router.route("/").get(getAllCourse);
router.route("/:id").get(getSpecificCourse);
router.route("/:id").put(updateCourse);
router.route("/:id").delete(deleteCourse);

export default router;
