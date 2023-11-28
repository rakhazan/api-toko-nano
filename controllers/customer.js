import * as Model from "../models/customer.js"

export const getData = async (req, res) => {
    try {
        const [data] = await Model.get()

        res.json({
            message: 'Get data customers',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            errorMessage: error,
        })
    }
}

export const getDetail = async (req, res) => {
    const { id } = req.params

    try {
        const [data] = await Model.find(id)

        res.json({
            message: `Get detail customer`,
            data: data
        })
    } catch (error) {
        res.status(500).json({
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

        res.json({
            message: 'Customer updated successfully',
            data: { id: id, ...body }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            errorMessage: error,
        })
    }
}