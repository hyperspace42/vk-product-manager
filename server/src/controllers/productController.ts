import { IProduct } from '$types';
import { Request, Response } from 'express';

class ProductController {
  getProducts(req: Request, res: Response): void {
    res.json([
      {
        id: '0',
        date: new Date(),
        username: 'hyperspace',
        productName: 'Skin',
        body: 'hello world',
        chatUrl: 'adfasd',
        completed: false,
      },
      {
        id: '1',
        date: new Date(),
        username: 'bruh',
        productName: 'Skin 2',
        body: 'hello world',
        chatUrl: 'adfasd',
        completed: true,
      },
    ]) as Response<IProduct[]>;
  }

  getProduct(req: Request, res: Response): void {
    const productId: string = req.params.id;

    res.json({
      id: productId,
      date: new Date(),
      username: 'hyperspace',
      productName: 'Skin',
      body: 'hello world',
      chatUrl: 'adfasd',
      completed: false,
    }) as Response<IProduct>;
  }

  createProduct(req: Request, res: Response): void {
    res.json({
      id: new Date().getDate(),
      date: new Date(),
      username: 'hyperspace',
      productName: 'Skin',
      body: 'hello world',
      chatUrl: 'adfasd',
      completed: false,
    }) as Response<IProduct>;
  }
}

export default new ProductController();
