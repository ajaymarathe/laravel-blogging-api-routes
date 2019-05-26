<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<h1>Create Category</h1>
					<div class="form-group">
						<label>Category:</label>
						<input v-model="category" type="text" class="form-control">
					</div>
					<div class="form-group">
						<button @click="CreateCategory" type="button" class="btn btn-primary">Create</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				category: '',
			}
		},
		methods:{
			CreateCategory(){
				let CategoryData = [this.category];
				// console.log(CategoryData);
				this.$store.dispatch('Create_Category',CategoryData);
			}
		}
	}
</script>