import db from '../config/database.js'

export const get = (filters = []) => {
    let sql = `SELECT * FROM products WHERE is_deleted = 0 AND stock > 0`
    if (filters.length > 0) filters.forEach((filter, key) => {
        sql += ` AND ${filters.join(' AND ')}`;
    })
    return db.execute(sql)
}

export const find = async (id) => {
    const sql = `SELECT * FROM products WHERE is_deleted=0 AND id=? LIMIT 1`
    const [result] = await db.execute(sql, [id])
    return result || null
}