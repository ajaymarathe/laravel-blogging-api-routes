import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/home.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: Home,
    }
]

const router = new VueRouter({
    routes,
})

export default router