import React from 'react'
import Comment from './Comment'

export default function CommentList(props){
  const { comments } = props
  return (
    <div className="todo-list">
      { comments.map(comment => <Comment {...comment} key={comment._id}/>) }
    </div>
  )
  }