import $api from '$api';
import { IProduct } from '@/types/product';
import { AxiosResponse } from 'axios';

class ProductService {
  async getAllProdcuts(): Promise<IProduct[]> {
    const products: IProduct[] = await $api.get('/products').then((res: AxiosResponse) => res.data);
    return products;
  }

  async updateProductStatus(productId: number, status: boolean): Promise<IProduct> {
    const product: IProduct = await $api.put(`/products/${productId}`, { completed: status }).then((res: AxiosResponse) => res.data);
    return product;
  }

  async deleteProduct(productId: number): Promise<IProduct> {
    const product: IProduct = await $api.delete(`products/${productId}`).then((res: AxiosResponse) => res.data);
    return product
  }
}

export default new ProductService();
