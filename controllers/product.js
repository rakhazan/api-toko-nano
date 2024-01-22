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
            status: 'success',
            message: 'Get all products',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
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
            status: 'success',
            message: 'Get detail product',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server Error',
            errorMessage: error,
        })
    }
}

export const getCategories = async (req, res) => {
    try {
        const [data] = await Model.categories()

        res.json({
            status: 'success',
            message: 'Get all categories',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server Error',
            errorMessage: error,
        })
    }
}

export const getWishlists = async (req, res) => {
    try {
        const [data] = await Model.wishlists()

        res.json({
            status: 'success',
            message: 'Get all wishlists',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server Error',
            errorMessage: error,
        })
    }
}

export const toggleWishlist = async (req, res) => {
    const { customer_id, product_id } = req.body
    let message = ''

    try {
        const check = await Model.wishlistCheck(product_id, customer_id)
        if (check) {
            await Model.wishlistRemove(product_id, customer_id)
            message = 'Product removed from wishlist'
        } else {
            await Model.wishlistAdd(product_id, customer_id)
            message = 'Product added from wishlist'
        }

        res.json({
            status: 'success',
            message: message
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server Error',
            errorMessage: error,
        })
    }
}