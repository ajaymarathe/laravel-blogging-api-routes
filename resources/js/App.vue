<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <app_footer></app_footer>
  </div>
</template>
<script>
import app_footer from './components/footer';
import navbar from './components/navbar';
    export default {
        components:{
            app_footer,
            navbar,
        }
    }
</script>