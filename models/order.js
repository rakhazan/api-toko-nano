import db from '../config/database.js'


export const get = () => {
    const sql = `SELECT * FROM orders WHERE is_deleted=0`
    return db.execute(sql)
}

export const insert = async (customer_id, products = []) => {
    const date = new Date()
    const conn = await db.getConnection()
    try {
        await conn.beginTransaction()

        const createOrderSQL = `INSERT INTO orders (customer_id, date) VALUES (?, ?)`
        const [orderResult] = await conn.execute(createOrderSQL, [customer_id, date])
        const insertedId = orderResult.insertId
        console.log(insertedId)

        const createDetailOrderSQL = `INSERT INTO orders_detail (order_id, product_id, buying_price, quantity) VALUES (?,?,?,?)`
        for (const product of products) {
            await conn.execute(createDetailOrderSQL, [insertedId, product.id, product.price, product.quantity])
        }

        await conn.commit()
        return true
    } catch (error) {
        await conn.rollback()
        console.log('error: ' + error)
        throw error
    } finally {
        db.releaseConnection()
    }
}