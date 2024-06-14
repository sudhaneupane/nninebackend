import{questionCreate,viewQuestion} from '../controllers/quiz.controller.js'
import { writeAns,viewAns } from '../controllers/ansQuiz.controller.js'
import {Router} from 'express'

const router=Router()
router.route('/ques').post(questionCreate)
router.route('/getques').get(viewQuestion)

router.route('/write').post(writeAns)
router.route('/getans').get(viewAns)
export default router