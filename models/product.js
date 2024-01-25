import db from '../config/database.js'

export const get = (filters = []) => {
    let sql = `SELECT * FROM products WHERE is_deleted = 0 AND stock > 0`
    if (filters.length > 0) sql += ` AND ${filters.join(' AND ')}`
    return db.execute(sql)
}

export const find = async (id) => {
    const sql = `SELECT * FROM products WHERE is_deleted=0 AND id=? LIMIT 1`
    const [result] = await db.execute(sql, [id])
    return result.length > 0 ? result[0] : null
}

export const categories = () => {
    const sql = `SELECT id, name FROM categories WHERE is_deleted = 0`
    return db.execute(sql)
}

export const wishlists = () => {
    const sql = `SELECT * FROM wishlists`
    return db.execute(sql)
}

export const wishlistCheck = async (idProduct, idCostumer) => {
    const sql = `SELECT * FROM wishlists WHERE customer_id = ${idCostumer} AND product_id = ${idProduct} LIMIT 1`
    const [result] = await db.execute(sql)
    return result.length > 0
}

export const wishlistAdd = (idProduct, idCostumer) => {
    const sql = `INSERT INTO wishlists (customer_id, product_id) VALUES (${idCostumer}, ${idProduct})`
    return db.execute(sql)
}

export const wishlistRemove = (idProduct, idCostumer) => {
    const sql = `DELETE FROM wishlists WHERE customer_id = ${idCostumer} AND product_id = ${idProduct}`
    return db.execute(sql)
}