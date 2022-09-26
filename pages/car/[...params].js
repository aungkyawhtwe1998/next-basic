import { useRouter } from 'next/router'
import React from 'react'

function Car() {
    const router = useRouter();
    const {params} = router.query;
  return (
    <div>
        <h1>Car with filtering</h1>
        <p>{JSON.stringify(params)}</p>
        <p>Brand {params[0]}</p>
        <p>Model {params[1]}</p>
        <p>Min Budget {params[2]}</p>

    </div>
  )
}

export default Car