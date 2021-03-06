const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')


//Get All
commentRouter.get('/', (req, res, next) => {
  Comment.find( (err, comment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comment)
  })
})

//Get All By Issue Id
commentRouter.get('/:issueId', (req, res, next) => {
    Comment.find({issueId: req.params.issueId}, (err, comment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(comment)
    })
  })
  
  //Get All By User
  commentRouter.get('/user', (req, res, next) => {
      Comment.findOne({user: req.user._id}, (err, comment)=> {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(comment)
      })
  })
  

//Post
commentRouter.post('/', (req, res, next)=> {
  req.body.user = req.user._id
  const newComment = new Comment(req.body)
  newComment.save((err, savedComment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedComment)
  })
})

//Update
commentRouter.put('/:commentId', (req, res, next)=>{
  Comment.findOneAndUpdate(
    {_id: req.params.commentId},
    req.body,
    {new: true},
    (err, updatedComment)=> {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(updatedComment)
  })
})

//Delete
commentRouter.delete('/:commentId', (req, res, next)=> {
  Comment.findOneAndDelete(
    {_id: req.params.commentId},
    (err, deletedItem)=>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted ${deletedItem.comment} from the database.`)
    }
  )
})

module.exports = commentRouter