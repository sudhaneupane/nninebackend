import { Router } from "express";
import {courseInfo} from "../controllers/course.controller.js"
const router=Router()
router.route('/reg').post(courseInfo)
export default router