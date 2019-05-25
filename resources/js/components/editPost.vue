<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<h1>Edit Post:</h1>
					<div class="form-group">
						<label>Title:</label>
						<input v-model="title" class="form-control" type="text" placeholder="Enter the Title">
					</div>
					<div class="form-group">
						<label>Category:</label>
						<select v-model="category" class="custom-select" >
							<option v-for="category in categories" :value="category.id">{{category.category}}</option>
						</select>
					</div>
					<div class="form-group">
						<label>Body:</label>
						<markdown-editor v-model="body" ref="markdownEditor"></markdown-editor>
					</div>
					<div class="form-group">
						<input @click="CreatePost" type="submit" class="btn btn-primary">
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
				message: 'I am in',
			}
		}
	}
</script>