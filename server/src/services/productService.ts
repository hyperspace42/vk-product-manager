import { IProduct } from '$types';
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

class ProductService {
  async getProducts(): Promise<Product[] | null> {
    const products = await prisma.product.findMany();
    return products;
  }

  async getProduct(productId: string): Promise<Product | null> {
    const product = await prisma.product.findFirst({
      where: {
        id: productId,
      },
    });

    return product;
  }

  async createProduct(product: IProduct): Promise<Product> {
    const productRes = await prisma.product.create({ data: product });

    return productRes;
  }
}

export default new ProductService();
