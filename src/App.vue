<template>
  <header class="bg-primary dark:bg-darkPrimary">
    <div class="max-w-5xl px-4 lg:px-10 mx-auto flex justify-between items-center text-white">
      <nav class="p-3 flex flex-col sm:flex-row md:text-lg gap-4">
        <RouterLink class="text-white hover:text-lime-600" to="/">Home</RouterLink>
        <RouterLink class="text-white hover:text-lime-600" to="/characters">Characters</RouterLink>
        <RouterLink class="text-white hover:text-lime-600" to="/form">Form</RouterLink>
      </nav>
      <div class="flex justfy-end">
        <CustomButton @custom-click="state.updateTheme()">
          Toggle theme to {{ state.theme === 'light' ? 'dark' : 'light'}}
        </CustomButton>
      </div>
    </div>
  </header>
  <div class="max-w-6xl px-4 lg:px-10 mx-auto">
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import {state} from "./globalState.ts"
import CustomButton from "@/components/CustomButton.vue";
</script>


<style scoped>

</style>
