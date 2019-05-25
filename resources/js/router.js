import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/home.vue';
import Show from './components/show.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: Home,
    },
    {
        path: 'show/:slug',
        component: Show,
        name: Show,
        props: true 
    }
]

const router = new VueRouter({
    routes,
})

export default router