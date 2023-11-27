import express from 'express'
import * as Controller from '../controllers/product.js'

const router = express.Router()

router.get('/', Controller.getAll)
router.get('/detail/:id', Controller.getDetail)

export default router