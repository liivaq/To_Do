<template>
  <button
      @click="handleClick"
      :type="props.type"
      class="bg-gray-300 my-2 px-4 py-1 text-md hover:bg-lime-500 hover:text-white rounded-lg"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

const props =
    defineProps<{
      type?: {
        type: 'button' | 'submit' | 'reset'
        default: 'button'
      }
    }>()

const emit = defineEmits<{
  (e: 'customClick'): void
}>()

const handleClick = () => {
  emit('customClick')
}
</script>