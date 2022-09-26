import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

function Edit() {
    const router = useRouter();
    const {id} = router.query;
    const changePage = ()=>{
        router.push('/about');
    }
  return (
    <div>

        <h1>Edit page id is {id}</h1>
        <Link href='/'>
            <a>Back to home</a>
        </Link>
        <br/>
        <Link href='/posts'>
            <a>Back to posts</a>
        </Link>
        <br/>
        <button onClick={changePage}>To About page</button>
    </div>
  )
}

export default Edit