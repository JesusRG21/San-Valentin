import { createRouter, createWebHistory } from 'vue-router'
import  Home from '../views/Home.vue'
import Accept from '../views/Accept.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'SanValentin',
        component: Home
    },
    {
        path: '/Accept',
        name: 'accept',   
        component: Accept
    }
]
})

export default router