import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        post: '',
        single_post:'',
        categories:'',
    },
    mutations: {
        get_Post(state,get_Post){
            state.post = get_Post
        },
        get_single_post(state, get_single_post){
            state.single_post = get_single_post
        },
        // edit_post(state, edit_post){
        //     state.edit_data = edit_post
        // }
        get_categories(state,get_categories){
            state.categories = get_categories
        }
    },
    getters: {
        posts_data: state => {
            return state.post;
        },
        single_post: state =>{
            return state.single_post;
        },
        // Edit_post_data: state =>{
        //     return state.Edit_post_data
        // },
        categories: state =>{
            return state.categories
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
        Edit_Post({commit},slug){
            axios.post('http://localhost:8000/api/posts/'+slug)
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
        }
    }
  })
