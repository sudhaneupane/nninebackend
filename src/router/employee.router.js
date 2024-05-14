import {Router} from 'express'
import {employeedata} from '../controllers/employee.controller.js'
const router=Router()
router.route('/register').post(employeedata)
export default router