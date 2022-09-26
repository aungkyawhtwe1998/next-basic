import {useRouter} from 'next/router';
function detail() {
    const router = useRouter();
    const id = router.query.id;
  return (
    <div>detail page with id of {id}</div>
  )
}

export default detail