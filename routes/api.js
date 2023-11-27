import express from 'express'
import ProductRoutes from './product.js'

const router = express.Router()

router.use('/', (req, res) => {
    res.send(`This is Toko Nano API's`)
})

router.use('/products', ProductRoutes)


export default router