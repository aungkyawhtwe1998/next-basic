import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function about({id = 101}) {
  const router = useRouter();
  const changePage = () =>{
    router.replace(`/posts/edit/${id}`)
  }
  return (
    <div>
      <h1>About Page</h1>
      <Link href= "/">
        <a>Home Page</a>
      </Link>
      <button onClick={changePage}>
        post edit {id}
      </button>
    </div>
  )
}

export default about