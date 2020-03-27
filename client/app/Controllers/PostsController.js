import PostsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _draw() {
	let posts = store.State.posts;
	let template = ``;
	posts.forEach(post => (template += post.Template))
	document.getElementById("posts").innerHTML = template
	console.log("postsController._draw():\n" + posts);
}

//Public
export default class PostsController {
	constructor() {
		store.subscribe("posts", _draw);
	}

	async getPosts() {
		try {
			await PostsService.getPosts()
		} catch (error) {console.error(error)}
	}

}
