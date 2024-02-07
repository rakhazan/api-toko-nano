import db from '../config/database.js'

export const get = () => {
    const sql = `SELECT o.*, c.fullname, c.email, c.phone FROM orders o
    LEFT JOIN customers c ON o.customer_id=c.id
    WHERE o.is_deleted=0`
    return db.execute(sql)
}

export const getOrderDetails = (order_id) => {
    const sql = `SELECT * FROM orders_detail WHERE order_id=?`
    return db.execute(sql, [order_id])
}

export const insert = async (customer_id, address, products = []) => {
    const date = new Date()
    const conn = await db.getConnection()
    try {
        await conn.beginTransaction()

        const createOrderSQL = `INSERT INTO orders (customer_id, date, address) VALUES (?, ?, ?)`
        const [orderResult] = await conn.execute(createOrderSQL, [customer_id, date, address])
        const insertedId = orderResult.insertId
        console.log(insertedId)

        const createDetailOrderSQL = `INSERT INTO orders_detail (order_id, product_id, buying_price, quantity) VALUES (?,?,?,?)`
        for (const product of products) {
            await conn.execute(createDetailOrderSQL, [insertedId, product.id, product.price, product.quantity])
        }

        return await conn.commit()
    } catch (error) {
        await conn.rollback()
        console.log('error: ' + error)
        throw error
    } finally {
        db.releaseConnection()
    }
}

export const update = (order_id, data) => {
    const date = new Date()
    const setData = Object.keys(data).map(key => `${key}='${data[key]}'`).join(', ')
    console.log(setData)

    const sql = `Update orders SET ${setData}, updated_at=? WHERE id=?`;
    return db.execute(sql, [date, order_id])
}