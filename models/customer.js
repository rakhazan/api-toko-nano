import db from "../config/database.js"

export const get = () => {
    const sql = `SELECT * FROM customers WHERE is_deleted = 0`
    return db.execute(sql)
}

export const find = async (id) => {
    const sql = `SELECT * FROM customers WHERE is_deleted = 0 AND id = ${id} LIMIT 1`
    const [result] = await db.execute(sql)
    return result.length > 0 ? result[0] : null
}

export const update = (id, data) => {
    const setData = Object.keys(data).map(key => `${key}=?`).join(', ')
    const values = [...Object.values(data), id]
    const sql = `UPDATE customers SET ${setData}, updated_at=NOW() WHERE id=?`
    return db.execute(sql, values)
}

export const login = async (email, pass) => {
    const sql = `SELECT * FROM customers WHERE email=? AND password=? LIMIT 1`
    const [result] = await db.execute(sql, [email, pass])
    return result.length > 0 ? result[0] : null
}

export const register = (data) => {
    const sql = `INSERT INTO customers (fullname, username, email, phone, password) VALUES (?,?,?,?,?)`
    return db.execute(sql, [data.fullname, data.username, data.email, data.phone, data.password])
}

export const checkUniqueEmail = async (email) => {
    const sql = `SELECT * FROM customers WHERE email=? LIMIT 1`
    const [result] = await db.execute(sql, [email])
    return result.length > 0
}