import { Router } from "express";
import {getStudentDetail, studentInfo} from "../controllers/student.contoller.js";
const router=Router()

router.route('/save').post(studentInfo)
router.route('/logs').get(getStudentDetail)

export default router