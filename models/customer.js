import db from "../config/database.js"

export const get = () => {
    const sql = `SELECT * FROM customers WHERE is_deleted = 0`
    return db.execute(sql)
}

export const find = async (id) => {
    const sql = `SELECT * FROM customers WHERE is_deleted = 0 AND id = ${id} LIMIT 1`
    const [result] = await db.execute(sql)
    return result || null
}

export const update = (id, data) => {
    const setData = Object.keys(data).map(key => `${key} = ${data[key]}`).join(', ')
    const sql = `UPDATE customers SET ${setData} WHERE id = ${id}`
    return db.execute(sql)
}
