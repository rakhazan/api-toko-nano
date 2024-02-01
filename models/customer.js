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
    const date = new Date()
    const setData = Object.keys(data).map(key => `${key} = ${data[key]}`).join(', ')
    const sql = `UPDATE customers SET ${setData}, updated_at=${date} WHERE id = ${id}`
    return db.execute(sql)
}

export const login = async (email, pass) => {
    const sql = `SELECT * FROM customers WHERE email=? AND password=? LIMIT 1`
    const [result] = await db.execute(sql, [email, pass])
    return result.length > 0 ? result[0] : null
}

export const register = (data) => {
    const sql = `INSERT INTO customers (fullname, username, email, password) VALUES (?,?,?,?)`
    return db.execute(sql, [data.fullname, data.username, data.email, data.password])
}