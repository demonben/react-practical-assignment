import React from 'react'
import CommentItem from './CommentItem'

const CommentsList = ({post}) => {
  return (
    <div>{post.comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}</div>
  )
}

export default CommentsList