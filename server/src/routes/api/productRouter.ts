import express, { Router } from 'express';
import productController from '@controllers/productController';

const router: Router = express.Router();

router.get('/', productController.getProducts);

router.post('/', productController.createProduct);

router.delete('/:id', productController.deleteProduct);

router.put('/:id', productController.updateProductStatus);

export default router;
