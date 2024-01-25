import * as Model from '../models/order.js'

export const getData = async (req, res) => {
    try {
        const [data] = await Model.get()
        return res.json({
            status: 'success',
            message: 'Get all orders',
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Server error',
            errorMessage: error
        })
    }
}

export const create = async (req, res) => {
    const { customer_id, products } = req.body
    try {
        const create = await Model.insert(customer_id, products)
        if (create) {
            return res.json({
                status: 'success',
                message: 'Ordered succesfully'
            })
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'Order failed'
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 'error',
            message: 'Error processing request',
            errorMessage: error,
        })
    }
}

export const update = async (req, res) => {
    const { order_id, ...data } = req.body
    try {
        await Model.update(order_id, data)

        return res.json({
            status: 'success',
            message: 'Order updated successfully'
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Server Error',
            errorMessage: error,
        })
    }
}