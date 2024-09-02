import { Router } from "express";
import {
  createInstructor,
  deleteInstructor,
  getAllInstructor,
  getSpecificInstructor,
  updateInstructor,
} from "../controllers/instructor.controller.js";

const instructorRouter = Router();
instructorRouter.route("/").post(createInstructor);
instructorRouter.route("/").get(getAllInstructor);
instructorRouter.route("/:id").get(getSpecificInstructor);
instructorRouter.route("/:id").patch(updateInstructor);
instructorRouter.route("/:id").delete(deleteInstructor);
export default instructorRouter;
