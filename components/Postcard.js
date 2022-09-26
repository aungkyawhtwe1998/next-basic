import React from 'react'

function PostCard({post}) {
  return (
    <div>
        <strong>{post.id}</strong>
        <strong>{post.title}</strong>
    </div>
  )
}

export default PostCard