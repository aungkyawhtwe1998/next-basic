import { useRouter } from 'next/router'
import React from 'react'

function Edit() {
    const router = useRouter();
    const {id,editid} = router.query;
  return (
    <div>Category id is {id} and  Edit id is  {editid}</div>
  )
}

export default Edit