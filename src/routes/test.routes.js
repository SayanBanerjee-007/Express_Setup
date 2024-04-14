import { Router } from 'express'
import { testController } from '../controllers/test.controller.js'

const testRouter = Router()

// Controllers
testRouter.route('/').get(testController)

export { testRouter }
