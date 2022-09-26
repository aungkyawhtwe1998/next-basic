import Link from 'next/link'
import React from 'react'

function index({catid = 200}) {
  return (
    <div>
        <h1>Post Page</h1>
        <Link href = "/">
        <a>Back to home</a>
        </Link>
        <br/>
        <Link href = "/posts/edit/100">
            <a>To Posts Edit Page</a>
        </Link>
        <br/>
        <Link href = {`/posts/edit/${catid}`} replace>
            <a>To Posts Edit Page</a>
        </Link> 
    </div>
  )
}

export default index