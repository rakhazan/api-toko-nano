import express from 'express'
import ProductRoutes from './product.js'
import CustomerRoutes from './customer.js'
import OrderRoutes from './order.js'

const router = express.Router()

router.use('/products', ProductRoutes)
router.use('/customers', CustomerRoutes)
router.use('/orders', OrderRoutes)
router.use('/', (req, res) => res.send(`This is Toko Nano API's`))

export default router