import express from 'express'
import * as Controller from '../controllers/product.js'

const router = express.Router()

router.put('/:id', Controller.update)
router.delete('/:id', Controller.destroy)
router.post('/', Controller.create)
router.get('/', Controller.getAll)

export default router