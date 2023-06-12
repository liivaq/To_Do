<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header class="bg-gray-800">
    <div class="max-w-5xl px-4 lg:px-10 mx-auto">
      <nav class="p-3 flex flex-col sm:flex-row md:text-lg gap-4">
        <RouterLink class="text-white hover:text-amber-400" to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <div class="max-w-5xl px-4 lg:px-10 mx-auto">
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
