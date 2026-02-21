import { Router } from "express";
import { addProduct, listProducts } from "./product.service.js";

const router = Router()

router.post('/', async (req, res, next) => {
    const result = await addProduct(req.body)
    return res.status(201).json({
        Message: "Product Added",
        result
    })
})

router.get('/', async (req, res, next) => {
    const result = await listProducts()
    return res.status(200).json({
        Message: "Product Added",
        result
    })
})

export default router