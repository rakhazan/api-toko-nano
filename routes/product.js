import express from 'express'
import * as Controller from '../controllers/product.js'

const router = express.Router()

router.get('/', Controller.getData)
router.get('/categories', Controller.getCategories)
router.get('/wishlists', Controller.getWishlists)
router.post('/wishlists', Controller.toggleWishlist)
router.get('/:id', Controller.getDetail)

export default router