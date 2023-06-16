<template>
  <button
      @click="handleClick"
      :type="props.type"
      class="px-2 py-1 bg-secondary-light dark:bg-darkSecondary"
      :disabled="props.isDisabled"
      :class="{
        'hover:bg-lime-500 hover:text-white rounded-lg': !props.isDisabled,
        'opacity-50 cursor-not-allowed': props.isDisabled
      }"
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
      },
     isDisabled?: {
        type: boolean;
        default: false;
     }
    }>()

const emit = defineEmits<{
  (e: 'customClick'): void
}>()

const handleClick = () => {
  emit('customClick')
}
</script>