<template>
  <div @click="toggle" class="text-xl text-zinc-200 bg-zinc-800 w-40 py-3 px-3 rounded-xl transition cursor-pointer relative group">
    <div class="flex flex-row items-center justify-between">
      <span :class="selectHeaderTextClass">{{ selectHeaderText }}</span>
      <svg
        :class="{ 'rotate-180': isOpened }"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-zinc-300 group-hover:text-zinc-400 transition"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <div v-if="isOpened" class="bg-zinc-800 w-full flex flex-col space-y-2 absolute top-full left-0 pt-3 px-2 pb-2 -mt-3 rounded-b-xl">
      <button @click="setSortTypeAll" class="text-xl text-indigo-500 bg-indigo-900 hover:text-indigo-900 hover:bg-indigo-500 py-1 px-2 rounded-xl transition">
        All
      </button>
      <button @click="setSortTypeWaiting" class="text-xl text-orange-500 bg-orange-900 hover:text-orange-900 hover:bg-orange-500 py-1 px-2 rounded-xl transition">
        Waiting
      </button>
      <button @click="setSortTypeCompleted" class="text-xl text-emerald-500 bg-emerald-900 hover:text-emerald-900 hover:bg-emerald-500 py-1 px-2 rounded-xl transition">
        Completed
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, Ref } from 'vue';
import { useProductStore } from '@/store/productStore';
import { storeToRefs } from 'pinia';

const productStore = useProductStore();
const { sortType } = storeToRefs(productStore);

const isOpened: Ref<boolean> = ref(false);

const selectHeaderTextClass: Ref<string> = computed((): string => {
  switch (sortType.value) {
    case 'all':
      return 'text-indigo-400';
    case 'waiting':
      return 'text-orange-400';
    case 'completed':
      return 'text-emerald-400';
    default:
      return 'text-zinc-200';
  }
});

const selectHeaderText: Ref<string> = computed((): string => {
  return sortType.value[0].toUpperCase() + sortType.value.slice(1, sortType.value.length);
});

const setSortTypeAll = function (): void {
  productStore.setSortTypeAll();
};

const setSortTypeWaiting = function (): void {
  productStore.setSortTypeWaiting();
};
const setSortTypeCompleted = function (): void {
  productStore.setSortTypeCompleted();
};

const toggle = function (): void {
  isOpened.value = !isOpened.value;
};
</script>
