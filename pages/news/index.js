import Link from 'next/link';
import React from 'react';
import PostCard from '../../components/Postcard'
function Post({posts}) {
  console.log(posts);
  return (
    <div>
      <h1>Post Page</h1>
      {
        posts.map(post=>{
          return <>
          <Link href={`/news/${post.id}`}>
          <strong>{post.id} {post.title}</strong>
          </Link>
          <br/><hr/>
            {/* <PostCard key={post.id} post={post}></PostCard> */}
            {/* <h1 key={post.id}>{post.title}</h1> */}
          </>
        })
      }
    </div>

  )
}

export default Post;
//static generation, server side code
export async function getStaticProps(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // console.log(data);
  return {
    props:{
      // posts:data.splice(0,5)
      posts:data
    }
  }
}