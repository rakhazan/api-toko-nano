import express from 'express'
import * as Controller from '../controllers/customer.js'

const router = express.Router()

router.post('/login', Controller.login)
router.post('/register', Controller.regis)

router.get('/', Controller.getData)
router.get('/:id', Controller.getDetail)
router.put('/:id', Controller.update)


export default router