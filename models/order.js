import db from '../config/database.js'

export const get = () => {
    const sql = `SELECT * FROM orders WHERE is_deleted=0`
    return db.execute(sql)
}

export const insert = async (customer_id, products = []) => {
    try {
        await db.beginTransaction()

        const createOrderSQL = `INSERT INTO orders (customer_id, date) VALUES (?, NOW())`
        const [orderResult] = db.execute(createOrderSQL, [customer_id])
        const insertedId = orderResult.insertId

        const createDetailOrderSQL = `INSERT INTO orders_detail (order_id, product_id, buying_price, quantity) VALUES (?,?,?,?)`
        products.forEach(product => {
            db.execute(createDetailOrderSQL, [insertedId, product.id, product.price, product.quantity])
        })

        return await db.commit()
    } catch (error) {
        await db.rollback()
        throw error
    } finally {
        db.releaseConnection()
    }
}