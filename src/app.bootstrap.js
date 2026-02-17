import express from 'express'
import { PORT } from '../config/config.service.js'
import { authenticateDB } from './DB/db.connection.js'
import { userRouter } from './Modules/index.js'

const bootstrap = async() => {

    const app = express()

    app.use(express.json())
    await authenticateDB()

    app.use('/users', userRouter)

    app.use((error, req, res, next) => {
        const status = error.cause?.status ?? 500
        return res.status(status).json({
            Message: 'Something Went Wrong !!',
            Error: error.message
        })
    })

    app.use('{/*dummy}', (req, res, next) => {
        return res.status(404).json({
            Message: "Invalid Routing"
        })
    })

    app.listen(PORT, () => {
        console.log(`Server is Running on port ${PORT}`);
    })

}

export default bootstrap