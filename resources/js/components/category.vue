<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-8">
				<h1>Categories</h1>
				<hr>
				<table class="table table-striped table-inverse table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Category</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="category in categories">
							<td>{{category.id}}</td>
							<td>{{category.category}}</td>
							<td><router-link class="btn btn-primary" :to="{name: 'CategoryEdit', params: {id: category.id}}"> Edit</router-link></td>
							<td><button @click="DeleteCategory(category.id)" type="button" class="btn btn-danger">Delete</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {  mapGetters } from 'vuex'
	export default{
		data(){
			return{

			}
		},
		computed:{
		...mapGetters([
            'categories'
            ])
		},
		mounted(){
			this.$store.dispatch('get_Categories');
		},
		methods:{
			DeleteCategory(category_id){
				console.log(category_id)
				this.$store.dispatch('Delete_Category',category_id)
			}
		}
	}
</script>