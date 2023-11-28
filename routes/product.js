import express from 'express'
import * as Controller from '../controllers/product.js'

const router = express.Router()

router.get('/', Controller.getData)
router.get('/:id', Controller.getDetail)
router.get('/categories', Controller.getCategories)

export default router