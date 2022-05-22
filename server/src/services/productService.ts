import { IProduct } from '$types';
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

class ProductService {
  async getProducts(): Promise<Product[] | null> {
    const products: Product[] = await prisma.product.findMany();
    return products;
  }

  async createProduct(product: IProduct): Promise<Product> {
    console.log(product);
    
    const productRes: Product = await prisma.product.create({ data: product as any });

    return productRes;
  }

  async deleteProduct(productId: number): Promise<Product> {
    const productRes: Product = await prisma.product.delete({ where: { id: productId } });

    return productRes;
  }

  async updateProductStatus(productId: number, status: boolean): Promise<Product> {
    const productRes: Product = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        completed: status,
      },
    });

    return productRes;
  }
}

export default new ProductService();
