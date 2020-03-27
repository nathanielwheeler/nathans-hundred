import ValuesController from "./Controllers/ValuesController.js";
import PostsController from "./Controllers/PostsController.js";

class App {
	valuesController = new ValuesController();
	postsController = new PostsController();
}

window["app"] = new App();
