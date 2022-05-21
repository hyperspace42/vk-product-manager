import express, { Router, Request, Response } from 'express';
import productController from '@controllers/productController';

const router: Router = express.Router();

router.get('/', productController.getProducts);

router.get('/:id',productController.getProduct);

router.post('/', productController.createProduct);

export default router;
