<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<h1>Create post</h1>
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
						<ckeditor :editor="editor" v-model="body" :config="editorConfig"></ckeditor>
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
import {  mapGetters } from 'vuex'	
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
	export default {
		data(){
			return {
				title:'',
				category:'',
				editor: ClassicEditor,
                body: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
			}
		},
		mounted(){
			this.$store.dispatch('get_Categories');
		},
		computed:{
		...mapGetters([
            'categories'
            ])
		},
		methods:{
			CreatePost(){
				let PostData = [this.title, this.category, this.body];
				console.log(PostData);

				this.$store.dispatch('add_Post',PostData);
			}
		}
	}
</script>