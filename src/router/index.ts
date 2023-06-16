import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import HomeView from '../views/HomeView.vue'
// @ts-ignore
import CharactersView from "@/views/CharactersView.vue";
// @ts-ignore
import CharacterView from "@/views/CharacterView.vue";
// @ts-ignore
import FormView from "@/views/FormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView
    },
    {
      path: "/characters/:id",
      name: "singleCharacter",
      component: CharacterView,
    },
    {
      path: "/form",
      name: "form",
      component: FormView,
    }
  ]
})

export default router
