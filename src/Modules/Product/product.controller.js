import { Router } from "express";
import { addProduct, listProducts } from "./product.service.js";
import { successResponce } from "../../Common/utils/index.js";

const router = Router()

router.post('/', async (req, res, next) => {
    const result = await addProduct(req.body)
    return successResponce({res, status:201, data: result})
})

router.get('/', async (req, res, next) => {
    const result = await listProducts()
    return successResponce({res, status:200, data: result})
})

export default router