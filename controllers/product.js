import * as Model from '../models/product.js'

export const getAll = async (req, res) => {
    try {
        const [data] = Model.getAll()

        res.json({
            message: 'Get all products',
            data: data,
        })
    } catch (error) {
        res.json({
            message: 'Server Error',
            errorMessage: error,
        })
    }
}

export const create = (req, res) => {
    res.json({
        message: 'Create new product'
    })
}

export const update = (req, res) => {
    res.json({
        message: 'Update product'
    })
}

export const destroy = (req, res) => {
    res.json({
        message: 'Delete product'
    })
}