import db from '../config/database.js'

export const get = () => {
    const sql = `SELECT o.*, c.fullname, c.email, c.phone, t.payment_status FROM orders o
    LEFT JOIN customers c ON o.customer_id=c.id
    LEFT JOIN transactions t ON o.id=t.order_id
    WHERE o.is_deleted=0
    ORDER BY o.created_at DESC`
    return db.execute(sql)
}

export const getOrderDetails = (order_id) => {
    const sql = `SELECT o.*, p.image, p.name, p.description FROM orders_detail o
    LEFT JOIN products p ON o.product_id=p.id
    WHERE order_id=?`
    return db.execute(sql, [order_id])
}

export const insert = async (customer_id, address, total, products = []) => {
    const date = new Date()
    const conn = await db.getConnection()
    try {
        await conn.beginTransaction()

        const createOrderSQL = `INSERT INTO orders (customer_id, date, address, total) VALUES (?, ?, ?, ?)`
        const [orderResult] = await conn.execute(createOrderSQL, [customer_id, date, address, total])
        const insertedId = orderResult.insertId

        const createDetailOrderSQL = `INSERT INTO orders_detail (order_id, product_id, buying_price, quantity) VALUES (?,?,?,?)`
        const minStockSQL = `UPDATE products SET stock=stock-?, updated_at=NOW() WHERE id=?`
        for (const product of products) {
            await conn.execute(createDetailOrderSQL, [insertedId, product.id, product.price, product.quantity])
            await conn.execute(minStockSQL, [product.quantity, product.id])
        }

        const createTransactionSQL = `INSERT INTO transactions (order_id) VALUES (?)`
        await conn.execute(createTransactionSQL, [insertedId])

        await conn.commit()

        return insertedId
    } catch (error) {
        await conn.rollback()
        throw error
    } finally {
        db.releaseConnection()
    }
}

export const update = (order_id, data) => {
    const date = new Date()
    const setData = Object.keys(data).map(key => `${key}='${data[key]}'`).join(', ')

    const sql = `Update orders SET ${setData}, updated_at=? WHERE id=?`;
    return db.execute(sql, [date, order_id])
}

export const confirmPayment = (order_id) => {
    const sql = `UPDATE transactions SET date=NOW(), payment_method='Bank Transfer', payment_status=1, updated_at=NOW() WHERE order_id=?`
    return db.execute(sql, [order_id])
}

export const addStock = (product_id, quantity) => {
    const sql = `UPDATE products SET stock=stock+?, updated_at=NOW() WHERE id=?`
    return db.execute(sql, [quantity, product_id])
}