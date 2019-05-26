<template>
   <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <a class="navbar-brand" href="#">VueBlog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link  to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/create_post" class="nav-link">Create Post</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/category" class="nav-link">Categories</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/create_category" class="nav-link">Create Category</router-link>
                </li>
                </ul>
            </div>
        </nav>
   </div>
</template>

<script>
    export default {
    }
</script>
