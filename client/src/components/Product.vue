<template>
  <div class="product bg-zinc-800 p-3 rounded-lg mb-4 place-items-center justify-items-start">
    <div class="flex flex-row items-center space-x-3">
      <div :class="statusDotClass" class="w-3 h-3 rounded-full"></div>
      <span class="text-xl text-zinc-200 mr-2">{{ authorId }}</span>
    </div>
    <div>
      <span class="text-xl text-zinc-200 mr-2">{{ dayjs(date).format('YYYY MM DD HH:mm') }}</span>
    </div>
    <div>
      <span :class="body.trim() ? 'text-zinc-200' : 'text-red-400'" class="text-xl mr-2">{{ productBody }}</span>
    </div>
    <div>
      <span class="text-xl text-zinc-200 mr-2">{{ productName }}</span>
    </div>
    <div>
      <span class="text-xl text-zinc-200 mr-2">{{ priceAmount }}<span class="text-green-500">₽</span></span>
    </div>
    <div class="actions flex flex-row items-center space-x-3">
      <button @click="setProductStatusFalse" v-if="completed" class="text-orange-500 bg-orange-900 hover:text-orange-900 hover:bg-orange-500 p-2 rounded-lg transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button @click="setProductStatusTrue" v-else class="text-emerald-500 bg-emerald-900 hover:text-emerald-900 hover:bg-emerald-500 p-2 rounded-lg transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </button>
      <button @click="openChatLink" class="text-indigo-500 bg-indigo-900 hover:text-indigo-900 hover:bg-indigo-500 p-2 rounded-lg transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
      <button @click="deleteProduct" class="text-rose-500 bg-rose-900 hover:text-rose-900 hover:bg-rose-500 p-2 rounded-lg transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { computed, Ref } from 'vue';
import { useProductStore } from '@store/productStore';

const productStore = useProductStore();

const props = defineProps<{
  id: number;
  date: string;
  authorId: number;
  productName: string;
  priceAmount: number;
  body: string;
  chatUrl: string;
  completed: boolean;
}>();

const statusDotClass: Ref<string> = computed((): string => {
  return props.completed ? 'bg-emerald-500' : 'bg-orange-500 product_waiting_dot';
});

const productBody: Ref<string> = computed((): string => {
  return props.body.trim() ? props.body.trim() : 'No message'
})

const setProductStatusTrue = function (): void {
  productStore.setProductStatusTrue(props.id);
};

const setProductStatusFalse = function (): void {
  productStore.setProductStatusFalse(props.id);
};

const openChatLink = function(): void {
  productStore.openChatLink(props.chatUrl)
}

const deleteProduct = function(): void {
  productStore.deleteProduct(props.id)
}

</script>

<style>
.product {
  display: grid;
  grid-template-columns: 1.5fr 1.75fr 4.5fr 2fr 1.5fr 1fr;
  gap: 1rem;
}

.product_waiting_dot {
  animation: infinite pulse 2s;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
    filter: hue-rotate(-20deg)
  }

  100% {
    opacity: 1;
  }
}

</style>
