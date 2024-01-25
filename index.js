import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/api.js'

const app = express()
dotenv.config()

app.use(cors({ credentials: true, origin: '*' }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', router)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log(`Server running https://localhost:${PORT}`)
})