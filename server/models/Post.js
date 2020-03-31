import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
	{
		title: { type: String, required: true },
		dayNum: { type: Number, required: true },
		dateString: { type: String, required: true },
		imgUrl: { type: String, required: true },
		imgAlt: { type: String, required: true },
		body: { type: Array, required: true }
	},
	{ timestamps: true, toJSON: { virtuals: true } }
);

export default Post;
