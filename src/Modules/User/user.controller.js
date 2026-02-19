import {Router} from 'express'
import { addUser, findUser, findAll } from './user.service.js'
const router = Router()

router.post('/add', async (req, res, next) => {
    const result = await addUser(req.body)
    return res.status(201).json({
        Message: "Addition Done",
        result
    })
})

router.get('/:userId', async (req, res, next) => {
    const result = await findUser(req.params.userId)
    return res.status(201).json({
        Message: "Profile Done",
        result
    })
})

router.get('/', async (req, res, next) => {
    const result = await findAll()
    return res.status(201).json({
        Message: "All Profiles Done",
        result
    })
})

export default router