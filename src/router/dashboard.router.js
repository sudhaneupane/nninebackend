import { getRegisterDetails } from "../controllers/dashboard.controller.js";
import { Router } from "express";

const router = Router()
router.route('/registerDetails').get(getRegisterDetails)
export default router