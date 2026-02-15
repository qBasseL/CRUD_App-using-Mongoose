import {Router} from 'express'
import { addUser } from './user.service.js'
const router = Router()

router.post('/add', async (req, res, next) => {
    const result = await addUser(req.body)
    return res.status(201).json({
        Message: "Addition Done",
        result
    })
})

export default router