import express from 'express'
import * as Controller from '../controllers/customer.js'

const router = express.Router()

router.get('/', Controller.getData)
router.get('/:id', Controller.getDetail)
router.put('/:id', Controller.update)

export default router