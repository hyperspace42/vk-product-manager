<template>
  <div @click="close" v-if="opened" class="modal_backdrop absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
    <div @click.stop class="bg-zinc-800 w-fit h-fit p-4 rounded-xl">
      <div v-if="showHeader" class="flex justify-end mb-4">
        <button @click="close" class="text-red-500 hover:text-red-600 hover:rotate-90 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="text-xl text-zinc-300">
        <slot name="body">
          <span class="text-red-400">Enter ur text</span>
        </slot>
      </div>
      <div v-if="showFooter" class="flex justify-end space-x-3 mt-4">
        <button @click="accept" class="text-green-500 bg-green-900 hover:text-green-900 hover:bg-green-500 p-2 rounded-xl transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </button>
        <button @click="reject" class="text-red-500 bg-red-900 hover:text-red-900 hover:bg-red-500 p-2 rounded-xl transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  opened: {
    type: Boolean,
    default: false
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: true
  },
})

const emit = defineEmits(['close', 'accept', 'reject'])

const close = function(): void {
  emit('close')
}

const accept = function(): void {
  emit('accept')
}

const reject = function(): void {
  emit('reject')
}

</script>

<style scoped>
.modal_backdrop {
  background: #00000040;
}
</style>
