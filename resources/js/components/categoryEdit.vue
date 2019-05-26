<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<h1>Category Edit</h1>
					{{category}}
					<hr>
					<div class="form-group">
						<label>Category:</label>
						<input :value="category.category" type="text" class="form-control">
					</div>
					<div class="form-group">
						<button @click="UpdateCategory" type="button" class="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
  name: 'categoryEdit',
  data () {
    return {

    }
  },
  mounted(){
  	const id = this.$route.params.id;
  	console.log(id);

  	this.$store.dispatch('get_single_category',id);
  },
  computed:{
	  ...mapGetters([
	    'category'
	    ])
  },
  methods:{
  		UpdateCategory(){
  			const id = this.$route.params.id;
  			const CatData = [this.category.category,id];
  			console.log(CatData)
  			this.$store.dispatch('Update_Category',CatData);
  		}
  }
}
</script>

<style lang="css" scoped>
</style>