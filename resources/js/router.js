import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/home.vue';
import Show from './components/show.vue';
import EditPost from './components/editPost.vue';
import CreatePost from './components/CreatePost';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/show/:slug',
        component: Show,
        name: 'Show',
        props: true
    },
    {
        path: '/edit/:slug',
        component: EditPost,
        name: 'EditPost'
    },
    {
        path: '/create_post',
        component: CreatePost,
        name: 'CreatePost'
    }
]

const router = new VueRouter({
    routes,
})

export default router
