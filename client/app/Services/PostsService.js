import store from "../store.js";
import Post from "../Models/Post.js"

const _SERVER_URL = "localhost:300/api/posts/"

class PostsService {
	async getPosts() {
		console.log("This should return an array of posts:");
		let results = await fetch(_SERVER_URL)
		let data = await results.json()
		let posts = data.map(p => new Post(p))
		//posts.reverse()
		store.commit("posts", posts)
	}
 }

const service = new PostsService();
export default service;
