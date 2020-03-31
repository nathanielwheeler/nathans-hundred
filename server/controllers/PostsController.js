import express from "express";
import BaseController from "../utils/BaseController";
import { postsService } from "../services/PostsService";

export class PostsController extends BaseController {
	constructor() {
		super("api/posts");
		this.router
			.get("", this.getAll)
			.post("", this.create);
	}
	async getAll(_, res, next) {
		try {
			return res.send(["post1", "post2"]);
		} catch (error) {
			next(error);
		}
	}
	async create(req, res, next) {
		try {
			res.send(req.body);
		} catch (error) {
			next(error);
		}
	}
}
