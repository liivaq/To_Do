<template>
  <div class="flex-1 items-center justify-between">

    <div class="flex" v-if="isEditing">

      <CustomInput
          :value="item.name"
          v-model:value="inputValue">
      </CustomInput>

      <button @click="isEditing = !isEditing" class="text-black hover:text-red-500">
        <CancelIcon class="w-8 h-8"/>
      </button>

      <button @click="$emit('saveValue', inputValue, item.id); isEditing = false"
              class="text-black hover:text-lime-700">
        <SaveIcon class="w-8 h-8"/>
      </button>

    </div>

    <div class="flex justify-between items-center" v-if="!isEditing">

      <div>
        <input id="checkbox" type="checkbox" class="accent-lime-500 h-6 w-6" :id="item.id" :checked="item.isFinished"
               @change="handleChange"/>
        <label
            for="checkbox"
            class="text-lg ml-4"
            :for="item.id"
            :class="{
        'line-through': item.isFinished
      }"
        >
          {{ item.name }}
        </label>

      </div>

      <div>
        <button @click="isEditing = !isEditing" class="text-black hover:text-blue-500">
          <EditIcon class="w-8 h-8"/>
        </button>

        <button @click="$emit('handleDelete', item.id)" class="text-red-400 hover:text-red-500">
          <DeleteIcon class="w-8 h-8"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Todo} from '@/views/HomeView.vue'
import DeleteIcon from './icons/Delete.vue'
import EditIcon from './icons/Edit.vue'
import CancelIcon from './icons/Cancel.vue'
import SaveIcon from './icons/Save.vue'
import {ref} from 'vue'
import CustomInput from "@/components/CustomInput.vue";

const isEditing = ref(false)
const inputValue = ref('');

defineOptions({
  inheritAttrs: false
})

defineProps<{
  item: Todo,
}>()

const emit = defineEmits<{
  (e: 'handleDelete', id: string): void
  (e: 'update:isCompleted', newValue: boolean): void
  (e: 'saveValue', newValue: string, id: string): void
}>()

const handleChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).checked
  emit('update:isCompleted', value)
}

</script>