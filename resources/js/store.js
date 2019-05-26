import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        post: '',
        single_post:'',
        categories:'',
        category:'',
    },
    mutations: {
        get_Post(state,get_Post){
            state.post = get_Post
        },
        get_single_post(state, get_single_post){
            state.single_post = get_single_post
        },
        get_categories(state,get_categories){
            state.categories = get_categories
        },
        get_single_category(state,get_single_category){
            state.category = get_single_category
        }
    },
    getters: {
        posts_data: state => {
            return state.post;
        },
        single_post: state =>{
            return state.single_post;
        },
        categories: state =>{
            return state.categories
        },
        category: state => {
            return state.category
        }
    },
    actions: {
        // get all post
        getPost({ commit }){
            axios.get('http://localhost:8000/api/posts')
            .then(response => {
                commit('get_Post', response.data)
                console.log("this is response", response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        },
        // get the single post
        get_single_post({commit},slug){
            console.log('get single post');
            axios.get('http://localhost:8000/api/posts/'+slug)
            .then( res => {
                console.log(res);
                commit('get_single_post', res.data)
            })
            .catch((error)=>{
                console.log(error);
            });
        },
        // Edit the post
        Edit_Post(UpdateData,slug){
            axios.post('http://localhost:8000/api/posts/'+slug,{
                title: UpdateData[0],
                category: UpdateData[1],
                body: UpdateData[2]
            })
            .then(res=>{
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
        },
        // delete the post
        Delete_Post({commit},slug){
            axios.delete('http://localhost:8000/api/posts/'+slug)
            .then(res => {
                console.log("this is res",res);
            })
            .catch((error) => {
                router.push("/")
                console.log("this is error",error);
            })
        },
        // get categories
        get_Categories({commit}){
            axios.get('http://localhost:8000/api/category')
            .then(res =>{
                console.log(res.data)
                commit('get_categories',res.data)
            })
            .catch((error) => {
                console.log("this is error",error);
            })
        },
        // add the post
       add_Post({commit},PostData){
            axios.post("http://localhost:8000/api/posts",{
                title: PostData[0],
                category: PostData[1],
                body: PostData[2]
            })
            .then(res => {
                router.push("/")
                console.log("this is response",res)
            }) 
            .catch((error) => {
                 
                console.log("this is error",error);
            })  
        },
        // delete the category
        Delete_Category({dispatch,commit},category_id){
            console.log('delete id',category_id)
            axios.delete('http://localhost:8000/api/category/'+category_id)
            .then(res => {
                dispatch('get_Categories')
                console.log("this is res",res);
            })
            .catch((error) =>{
                console.log(error);
            });
        },
        get_single_category({commit},id){
            axios.get('http://localhost:8000/api/category/'+id)
            .then(res =>{
                console.log(res.data)
                commit('get_single_category',res.data)
            })
            .catch((error) =>{
                console.log("this is error",error)
            })
        },
        Create_Category({commit},CategoryData){
            axios.post('http://localhost:8000/api/category/',{
                category: CategoryData[0],
                user_id: 2
            })
            .then(res =>{
                console.log(res)
                router.push('category')
            })
            .catch((error) => {
                console.log(error)
            })
        },
        Update_Category({commit},CatData){
            axios.patch('http://localhost:8000/api/category/'+CatData[1],{
                category: CatData[0],
                user_id: 2,
            })
            .then(res => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
  })
