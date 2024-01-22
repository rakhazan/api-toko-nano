import * as Model from '../models/order.js'

export const getData = async (req, res) => {
    try {
        const [data] = await Model.get()
        res.json({
            message: 'Get all orders',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            errorMessage: error
        })
    }
}

export const create = async (req, res) => {
    try {
        const create = await Model.insert(req.customer_id, req.products)
        if (create) {
            res.json({
                status: 'success',
                message: 'Ordered succesfully'
            })
        } else {
            res.status(400).json({
                status: 'error',
                message: 'Order failed'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error processing request',
            errorMessage: error,
        })
    }
}