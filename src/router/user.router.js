import { addUser, checkUser } from "../controllers/user.controller.js";
import { Router } from "express";
const router = Router()
router.route('/login').post(checkUser)
router.route('/register').post(addUser)

export default router