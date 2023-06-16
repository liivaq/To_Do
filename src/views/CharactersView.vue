<template>

  <div v-if="isLoading">
    Loading...
  </div>

  <div v-if="!isLoading && characters.length > 0">
    <ul class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 my-10">
      <li
          v-for="character in visibleCharacters"
          :key="character.id"
          class="characters-item"
      >
        <CharacterCard
            :id="character.id"
            :name="character.name"
            :status="character.status"
            :species="character.species"
            :gender="character.gender"
            :image="character.image"
        />
      </li>
    </ul>
    <CustomButton @custom-click="loadMore" v-if="isLoadMoreVisible">Load More</CustomButton>
  </div>

  <div class="flex justify-between" v-if="!isLoadMoreVisible">
    <CustomButton :is-disabled="!info?.prev" @custom-click="handlePrev">Previous</CustomButton>
    <CustomButton :is-disabled="!info?.next" @custom-click="handleNext">Next</CustomButton>
  </div>

</template>

<script setup lang="ts">

import CharacterCard from "@/components/CharacterCard.vue";
import {computed, onMounted, onUnmounted, ref, watch} from 'vue'
import {useRoute, useRouter} from "vue-router";
import CustomButton from "@/components/CustomButton.vue";
import {state} from "@/globalState"

export type Character = {
  id: string
  name: string
  status: string
  species: string
  gender: string
  image: string
}

type Info = {
  count: number,
  pages: number,
  next: string|null,
  prev: string|null
}

const CHARACTER_STEP= 5

const characters = ref<Character[]>([])
const isLoading = ref(false)
const error = ref('')
// page info state
const url = ref('https://rickandmortyapi.com/api/character')
const info = ref<Info | null>(null)
const visibleCharacterCount = ref(CHARACTER_STEP)

// const route = useRoute()
const router = useRouter()
const route = useRoute()

onMounted(() => {
  const pageValue = route.query.page || 1
  const pageUrl = `${url.value}?page=${pageValue}`
  getData(pageUrl)
})

onUnmounted(() => {
  //console.log('unmountted')
})


const getData = async (url: string) => {
  isLoading.value = true
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Something went wrong')
    }
    const data = await response.json()
    console.log('data', data)

    const { results, info: pageInfo } = data as { results: Character[]; info: Info }
    info.value = pageInfo

    characters.value = results.map((result) => {
      return {
        id: result.id,
        name: result.name,
        status: result.status,
        species: result.species,
        gender: result.gender,
        image: result.image
      }
    })
    isLoading.value = false
    error.value = ''
  } catch (e) {
    error.value = 'Something went wrong'
    isLoading.value = false
  }
}

const handleNext = () => {
  const nextUrl = info.value?.next
  if(!nextUrl){
    return
  }

  const pageId = info.value?.next && info.value?.next.split('=')[1]
  router.push({ query: {page: pageId}})
  visibleCharacterCount.value = CHARACTER_STEP;

  getData(nextUrl)
}

const handlePrev = () => {
  const prevUrl = info.value?.prev
  if(!prevUrl){
    return
  }

  const pageId = info.value?.prev && info.value?.prev.split('=')[1]
  router.push({ query: {page: pageId}})
  visibleCharacterCount.value = CHARACTER_STEP;

  getData(prevUrl)
}

const visibleCharacters = computed(() => {
  return characters.value.filter((_, index) => index < visibleCharacterCount.value)
})

const isLoadMoreVisible = computed(() => {
  return visibleCharacterCount.value < characters.value.length
})

const loadMore = () => {
  visibleCharacterCount.value += CHARACTER_STEP
}

</script>