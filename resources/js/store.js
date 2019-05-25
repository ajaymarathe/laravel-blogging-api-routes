import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Make sure to call Vue.use(Vuex) first if using a module system

export default new Vuex.Store({
    state: {
        post: '',
    },
    mutations: {
        get_Post(state,get_Post){
            state.post = get_Post
        }
    },
    getters: {
        posts_data: state => {
            return state.post;
        }
    },
    actions: {
        getPost({ commit }){
            console.log("You are in getPost data");
            axios.get('http://localhost:8000/api/posts')
            .then(response => {
                // response.data
                commit('get_Post', response.data)
                console.log("this is response", response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
           .then(PostData => {
                // commit('get_Post', PostData)
            })
        }
    }
  })