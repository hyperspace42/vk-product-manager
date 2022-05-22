import express, { Router, Request, Response } from 'express';
import productRouter from '@routes/api/productRouter'

const router: Router = express.Router();

router.use('/products', productRouter)

export default router;