import{questionCreate,viewQuestion} from '../controllers/quiz.controller.js'
import {Router} from 'express'

const router=Router()
router.route('/ques').post(questionCreate)
router.route('/getques').get(viewQuestion)
export default router