<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mb-3" v-for="post in posts_data" :key="post.id">
                    <div class="card-header">
                        By <span class="text-success">Bucky</span> on <span class="text-success">{{post.created_at}}</span>
                    </div>
                    <div class="card-body">
                        <h1>{{ post.title}}</h1>
                        <p v-if="post.body" v-html="post.body.substring(0, 100)+'...'"></p>
                        <router-link  class="btn btn-primary" to="show">Go to Foo</router-link>
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
            this.$store.dispatch('getPost')
            console.log('Home Component mounted.')
        },
        computed:{
        ...mapGetters([
            'posts_data'
            ])
        },
        methods:{
        }
    }
</script>
