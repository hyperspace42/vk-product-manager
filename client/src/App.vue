<template>
  <div class="container mx-auto my-4 flex flex-row items-center justify-between">
    <SelectSort />
    <button
      @click="updateProductsList"
      class="text-blue-500 bg-blue-900 hover:text-blue-900 hover:bg-blue-500 p-2 rounded-lg transition group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 group-hover:-rotate-180 transition"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    </button>
  </div>
  <div class="container mx-auto mt-4">
    <ProductsHeader class="mb-8" />
    <div v-if="sortedByDateProducts.length">
      <Product
        v-for="product in sortedByDateProducts"
        :key="product.id"
        :id="product.id"
        :authorId="product.authorId"
        :date="product.date"
        :productName="product.productName"
        :priceAmount="product.priceAmount"
        :body="product.body"
        :chatUrl="product.chatUrl"
        :completed="product.completed"
      />
    </div>
    <div v-else>
      <span class="text-3xl font-medium text-zinc-600">Empty</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed, Ref } from 'vue';
import { useProductStore } from '@store/productStore';
import { storeToRefs } from 'pinia';
import Product from '@components/Product.vue';
import ProductsHeader from '@components/ProductsHeader.vue';
import SelectSort from '@components/SelectSort.vue';
import { IProduct } from '@/types/product';

export default defineComponent({
  name: 'App',
  components: {
    Product,
    ProductsHeader,
    SelectSort,
  },
  setup() {
    const productStore = useProductStore();
    const { sortType, products } = storeToRefs(productStore);

    const sortedByStatusProducts: Ref<IProduct[]> = computed((): IProduct[] => {
      if (sortType.value === 'waiting') {
        return products.value.filter((product: IProduct) => product.completed === false);
      }
      if (sortType.value === 'completed') {
        return products.value.filter((product: IProduct) => product.completed === true);
      }

      return products.value;
    });

    const sortedByDateProducts: Ref<IProduct[]> = computed((): IProduct[] => {
      return sortedByStatusProducts.value.sort((a, b) => +new Date(b.date) - +new Date(a.date))
    })

    onBeforeMount(async (): Promise<void> => {
      productStore.getAllProdcuts();
    });

    const updateProductsList = function (): void {
      productStore.getAllProdcuts();
    };

    return { sortedByDateProducts, updateProductsList };
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&display=swap');

html,
body {
  font-size: calc(10px + 5 * ((100vw - 320px) / (1400 - 320)));
}

body {
  font-family: 'Manrope', sans-serif;
}
</style>
