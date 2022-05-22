import { IProduct } from '$types';
import { Product } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import productService from '@services/productService';

class ProductController {
  async getProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const products = await productService.getProducts();
      res.json(products as IProduct[] | null);
    } catch (err) {
      next(err);
    }
  }

  async createProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const product: IProduct = req.body;

      const productRes = await productService.createProduct(product);
      res.json(productRes as Product);
    } catch (err) {
      next(err);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const productId: number = +req.params.id;

      const productRes = await productService.deleteProduct(productId);
      res.json(productRes as Product);
    } catch (err) {
      next(err);
    }
  }

  async updateProductStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const productId: number = +req.params.id;
      const productStatus: boolean = req.body.completed;

      const productRes = await productService.updateProductStatus(productId, productStatus);
      res.json(productRes as Product);
    } catch (err) {
      next(err);
    }
  }
}

export default new ProductController();
