import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/home.vue';
import Show from './components/show.vue';
import EditPost from './components/editPost.vue';
import CreatePost from './components/CreatePost';
import Categories from './components/category';
import CategoryEdit from './components/categoryEdit';
import CreateCategory from './components/CreateCategory.vue';


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
    },
    {
        path: '/category/',
        component: Categories,
        name: 'Categories'
    },
    {
        path: '/categoryEdit/:id',
        component: CategoryEdit,
        name: 'CategoryEdit'
    },
    {
        path: '/create_category',
        component: CreateCategory,
        name: 'CreateCategory'
    }
]

const router = new VueRouter({
    routes,
})

export default router
