import { attendanceRecord ,getAttendanceRecord} from "../controllers/attendance.controller.js";
import { Router } from "express";
const router=Router()
router.route('/attend').post(attendanceRecord)
router.route('/getlogs').get(getAttendanceRecord)
export default router