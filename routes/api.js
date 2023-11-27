import express from 'express'
import ProductRoutes from './product.js'

const router = express.Router()

router.use('/products', ProductRoutes)

router.use('/', (req, res) => {
    res.send(`This is Toko Nano API's`)
})


export default router