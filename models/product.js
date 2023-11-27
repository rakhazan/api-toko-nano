import db from '../config/database.js'

export const getAll = () => {
    const sql = "SELECT * FROM products"
    return db.execute(sql)
}