const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    lowercase: true
  },
  postDate: {
    type: Date,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model("Comment", commentSchema)