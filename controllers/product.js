import * as Model from '../models/product.js'

export const getData = async (req, res) => {
    try {
        const filters = Object.entries(req.query).map(([key, value]) => {
            switch (key) {
                case 'name':
                    return `${key} LIKE '%${value}%'`
                case 'min':
                    return `price >= ${value}`
                case 'max':
                    return `price <= ${value}`
                case 'category_id':
                    return `${key}=${value}`
            }
        })

        const [data] = await Model.get(filters)

        res.json({
            message: 'Get all products',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            errorMessage: error,
        })
    }
}

export const getDetail = async (req, res) => {
    try {
        const { id } = req.params

        const [data] = await Model.find(id)

        res.json({
            message: 'Get detail product',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            errorMessage: error,
        })
    }
}

export const getCategories = async (req, res) => {
    try {
        const [data] = await Model.categories()

        res.json({
            message: 'Get all categories',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            errorMessage: error,
        })
    }
}