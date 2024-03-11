import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  user: { // tabela user mongoose
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: { 
    type: String,
    required: true,
  },
  likes: {        //tabela de post
    type: Array, // criei um array objetivo novo, não tem relacionamento,
    required: true,
  },
  comments: { //tabela de post
    type: Array,
    required: true,
  },
  createdAt: { // add data
    type: Date,
    default: Date.now(), // data atual
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
