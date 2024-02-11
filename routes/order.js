import express from 'express'
import * as Controller from '../controllers/order.js'

const router = express.Router()

router.put('/confirm-payment/:orderId', Controller.confirmPayment)

router.get('/', Controller.getData)
router.post('/', Controller.create)
router.put('/', Controller.update)

export default router