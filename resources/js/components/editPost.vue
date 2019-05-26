<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-8" v-if="single_post">
					<h1>Edit Post:</h1>
					<div class="form-group">
						<label>Title:</label>
						<input :value="single_post.title"  @input="single_post.title = $event.target.value" class="form-control" type="text" placeholder="Enter the Title">
					</div>
					<div class="form-group">
						<label>Category:</label>
						<select :value="single_post.category" @input="single_post.category =$event.target.value" class="custom-select" >
							<option v-for="category in categories" :value="category.id">{{category.category}}</option>
						</select>
					</div>
					<div class="form-group">
						<label>Body:</label>
						<ckeditor :editor="editor"  v-model="single_post.body" :config="editorConfig"></ckeditor>
					</div>
					<div class="form-group">
						<input @click="UpdatePost" type="submit" class="btn btn-primary">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {  mapGetters } from 'vuex'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
	export default{
		data(){
			return{
				body:'',
				editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the editor.
                }
			}
		},
		mounted(){
			const slug = this.$route.params.slug;
			this.$store.dispatch('get_single_post',slug)
			this.$store.dispatch('get_Categories')
		},
		computed:{
		...mapGetters([
            'single_post',
            'categories'
            ])
		},
		methods:{
			UpdatePost(){
				console.log('update post');
				const slug = this.$route.params.slug;
				const UpdateData = [this.single_post.title, this.single_post.category, this.single_post.body];
				console.log(UpdateData);

				this.$store.dispatch('Edit_Post',UpdateData,slug)
			}
		}
	}
</script>