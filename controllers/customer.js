import * as Model from "../models/customer.js"

export const getData = async (req, res) => {
    try {
        const [data] = await Model.get()

        return res.json({
            status: 'success',
            message: 'Get data customers',
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Server Error',
            errorMessage: error,
        })
    }
}

export const getDetail = async (req, res) => {
    const { id } = req.params

    try {
        const data = await Model.find(id)

        if (!data) {
            return res.status(404).json({
                status: 'error',
                message: 'Customer not found'
            })
        }

        return res.json({
            status: 'success',
            message: `Get detail customer`,
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Server Error',
            errorMessage: error,
        })
    }
}

export const update = async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        await Model.update(id, body)

        return res.json({
            status: 'success',
            message: 'Customer updated successfully',
            data: { id: id, ...body }
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Server Error',
            errorMessage: error,
        })
    }
}