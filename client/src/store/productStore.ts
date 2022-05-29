import { defineStore } from 'pinia';
import { IProduct } from '@/types/product';
import productService from '@services/productService';

enum SortType {
  all = 'all',
  waiting = 'waiting',
  compeleted = 'completed',
}

type TState = { sortType: SortType; products: IProduct[]; productIdToDelete: number | null };

export const useProductStore = defineStore('productStore', {
  state: () => {
    return {
      sortType: SortType.all,
      products: [],
      productIdToDelete: null,
    } as TState;
  },

  getters: {
    getProductIdToDelete(state: TState): number | null {
      return state.productIdToDelete;
    },
  },

  actions: {
    //#region product actions

    async getAllProdcuts(): Promise<void> {
      const products: IProduct[] = await productService.getAllProdcuts();
      this.products = products;
    },

    async setProductStatusTrue(productId: number): Promise<void> {
      await productService.updateProductStatus(productId, true);
      this.getAllProdcuts();
    },

    async setProductStatusFalse(productId: number): Promise<void> {
      await productService.updateProductStatus(productId, false);
      this.getAllProdcuts();
    },

    async deleteProduct(): Promise<void> {
      await productService.deleteProduct(this.productIdToDelete as number);
      this.setProductIdToDelete(null);
      this.getAllProdcuts();
    },

    setProductIdToDelete(value: number | null): void {
      this.productIdToDelete = value;
    },

    //#endregion

    //#region sort action

    setSortTypeAll(): void {
      this.sortType = SortType.all;
    },

    setSortTypeWaiting(): void {
      this.sortType = SortType.waiting;
    },

    setSortTypeCompleted(): void {
      this.sortType = SortType.compeleted;
    },

    //#endregion

    openChatLink(chatUrl: string): void {
      window.open(chatUrl);
    },
  },
});
