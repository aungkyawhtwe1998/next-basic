import { useRouter } from 'next/router'
import React from 'react'

function index() {
    const router = useRouter();
    const {id} = router.query;
  return (
    <div>Edit with id {id}</div>
  )
}

export default index