import { useRouter } from "next/router"

function Detail() {
    const router = useRouter();
    const {id} = router.query;
  return (
    <div>Detail {id}</div>
  )
}

export default Detail