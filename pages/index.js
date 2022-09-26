import { useRouter } from 'next/router';
import React from 'react'
function Home() {
  const router = useRouter();
  const toPost = () =>{
    router.push('/post')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={toPost}>To Posts</button>
    </div>
  )
}
export default Home;
