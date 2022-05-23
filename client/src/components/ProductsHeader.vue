<template>
  <div class="product_header bg-zinc-800 p-3 rounded-lg mb-4 place-items-center justify-items-start">
    <div class="flex flex-row items-center space-x-3">
      <div class="w-3 h-3 rounded-full bg-zinc-600"></div>
      <span class="text-xl text-zinc-400 mr-2">author id</span>
    </div>
    <div>
      <span class="text-xl text-zinc-400 mr-2">date</span>
    </div>
    <div>
      <span class="text-xl text-zinc-400 mr-2">body</span>
    </div>
    <div>
      <span class="text-xl text-zinc-400 mr-2">title</span>
    </div>
    <div>
      <span class="text-xl text-zinc-400 mr-2">price</span>
    </div>
    <div class="actions flex flex-row items-center space-x-3">
      <button class="text-zinc-500 bg-zinc-700 p-2 rounded-lg transition" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </button>
      <button class="text-zinc-500 bg-zinc-700 p-2 rounded-lg transition" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
      <button class="text-zinc-500 bg-zinc-700 p-2 rounded-lg transition" disabled>
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

<script setup lang="ts"></script>

<style scoped>
.product_header {
  display: grid;
  grid-template-columns: 1.5fr 1.75fr 4.5fr 2fr 1.5fr 1fr;
  gap: 1rem;
}
</style>
