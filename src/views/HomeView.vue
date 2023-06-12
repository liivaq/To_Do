<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import {computed, ref} from 'vue'
import AddIcon from '../components/icons/Add.vue'
import EraseIcon from '../components/icons/Erase.vue'
import CustomButton from '../components/CustomButton.vue'
import CustomInput from '../components/CustomInput.vue'
import TodoItem from '../components/ToDoItem.vue'

export type Todo = {
  id: string
  name: string
  isFinished: boolean
}

const todos = ref<Todo[]>(
    [
      {id: '1', name: 'Code', isFinished: false},
      {id: '2', name: 'Eat', isFinished: false},
      {id: '3', name: 'Sleep', isFinished: false},
      {id: '4', name: 'Repeat', isFinished: false}
    ])

type Filter = 'all' | 'finished' | 'unfinished'
const filterOptions = ['all', 'finished', 'unfinished'] as const

const inputValue = ref('')
const selectedFilter = ref<Filter>('all')


const handleSubmit = () => {
  if (inputValue.value.trim() === '') {
    return
  }

  todos.value.push({
    id: new Date().toISOString(),
    name: inputValue.value,
    isFinished: false
  })
  inputValue.value = ''
}

const handleTodoDelete = (id: string) => {
  todos.value = todos.value.filter((item) => item.id !== id)
}

const filteredTodosList = computed(() => {
  if (selectedFilter.value === 'finished') {
    return todos.value.filter((item) => item.isFinished)
  }

  if (selectedFilter.value === 'unfinished') {
    return todos.value.filter((item) => !item.isFinished)
  }

  return todos.value
})

const handleSave = (newValue: string, id: string) => {
  const todo = todos.value.find(element => element.id === id)
  return todo.name = newValue
}

// Updated computed
const isActiveFilter = computed(() => {
  return (filter: Filter) => filter === selectedFilter.value
})

const listName = ref('');

</script>

<template>
  <main class="py-10 px-10 bg-gray-700 mt-10 rounded-xl">
    <div class="bg-gray-200 rounded-xl">
      <form
          @submit.prevent="handleSubmit"
          class="flex gap-x-4 rounded pt-4 px-4"
      >
        <CustomInput v-model:value="inputValue" placeholder="Add a new task"/>

        <button type="submit">
          <span class="flex">
            <AddIcon class="w-8 h-8 text-lime-700 hover:text-lime-900"/>
          </span>
        </button>

        <button @click="inputValue = ''">
          <span class="flex">
            <EraseIcon class="w-8 h-8 text-pink-600 hover:text-pink-900"/>
          </span>
        </button>
      </form>

      <ul class="flex gap-x-2 mb-4 place-content-center">
        <li v-for="option in filterOptions" :key="option">
          <CustomButton
              @customClick="selectedFilter = option"
              :class="{
            'bg-lime-400': isActiveFilter(option)
          }"
          >
            {{ option.toUpperCase() }}
          </CustomButton>
        </li>
      </ul>
    </div>

    <ul class="flex flex-col gap-4">
      <li
          v-for="item in filteredTodosList"
          :key="item.id"
          class="bg-gray-200 rounded-xl text-black-200 p-3 flex gap-x-4 items-center"
      >
        <TodoItem
            :item="item"
            @handleDelete="(id) => handleTodoDelete(id)"
            @saveValue="(newValue, id) => handleSave(newValue, id)"
            v-model:isCompleted="item.isFinished"
        />
      </li>
    </ul>

  </main>
</template>

<style scoped></style>