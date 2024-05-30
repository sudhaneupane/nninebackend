import { Router } from "express";
import {courseInfo,getCourseDetails} from "../controllers/course.controller.js"
const router=Router()
router.route('/reg').post(courseInfo)
router.route('/getcourses').get(getCourseDetails)

export default router