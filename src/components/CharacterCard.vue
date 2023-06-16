<template>
<router-link :to="`/characters/${props.id}`">
<article class="bg-gray-700 mt-10 rounded-xl text-white flex">
  <img :src="props.image" :alt="props.name" class="p-2" />
  <div class="p-10">
    <h2 class="text-2xl mb-10">
      {{ props.name }}
    </h2>
    <div v-if="props.gender">Gender: {{ props.gender }}</div>
    <p
        v-if="props.status"
    >
      Status: {{ props.status }}
    </p>
  </div>
</article>
</router-link>

</template>

<script setup lang="ts">

type Character = {
  id: string
  name: string
  status: string
  species: string
  gender: string
  image: string
}

const props = defineProps<Character>();
</script>
