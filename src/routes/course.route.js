import {Router} from 'express'
import express from 'express'
import {yayayay} from './controllers/enroll.controller.js'
const router = Router()

router.route('/register').post(yayayay);

export default router