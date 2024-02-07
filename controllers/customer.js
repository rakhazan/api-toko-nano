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

    try {
        await Model.update(id, req.body)

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

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const data = await Model.login(email, password)
        if (!data) {
            return res.status(400).json({
                status: 'error',
                message: 'Email or Password is wrong'
            })
        }

        return res.json({
            status: 'success',
            message: `Login success`,
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

export const regis = async (req, res) => {
    try {
        const check = await Model.checkUniqueEmail(req.body.email)
        if (check) {
            return res.status(400).json({
                status: 'error',
                message: 'Email already used. Please enter another email'
            })
        }

        const reg = await Model.register(req.body)
        if (reg) {
            return res.json({
                status: 'success',
                message: 'Registration succesfully'
            })
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'Registration failed'
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