<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mb-3" >
                    <div class="card-header">
                        By <span class="text-success">Bucky</span> on <span class="text-success">{{single_post.created_at}}</span>
                    </div>
                    <div class="card-body">
                        <h1>{{ single_post.title}}</h1>
                        <p v-if="single_post.body" v-html="single_post.body" ></p>
                        <div class="w-100 d-flex justify-content-end">
                            <div class="dropdown show">
                              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
                              </a>

                              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <router-link :to="{name: 'EditPost', params: {slug: single_post.slug}}" class="dropdown-item">Edit</router-link>
                                <a class="dropdown-item" @click="DeletePost()">Delelte</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                              </div>
                            </div>
                        </div>  
                    </div>
                    <div class="card-footer">
                       <div class="form-group">
                            <input type="text" placeholder="Leave comment..." class="form-control" v-on:keyup.enter="submit">
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {  mapGetters } from 'vuex'
    export default {
        mounted() {
            let slug = this.$route.params.slug;
            console.log(slug)
            this.$store.dispatch('get_single_post',slug)
        },
        computed:{
            ...mapGetters([
            'single_post'
            ])
        },
        methods:{
            submit(){
                console.log("u enter comment");
            },
            DeletePost(){
                let slug = this.$route.params.slug;
                this.$store.dispatch('Delete_Post',slug);
            }
        }
    }
</script>
