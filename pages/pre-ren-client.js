import {useState} from "react";
import {useRouter} from 'next/router';
function preRenderingInClientSideDataFecthing({posts}){
    const [ps, setPs] = useState(posts);
    const router = useRouter();
    const handleFilter = async()=>{
        const response = await fetch("http://13.214.58.126:3001/posts/bycat/63294e6002e3e94e7b30d5d0")
        const resData = await response.json();
        setPs(resData.result);
        router.push("/pc?catId=63294e6002e3e94e7b30d5d0", undefined, {shallow:true})
    }
    return(
        <>
        <button onClick={handleFilter}>Filter Mdy Post</button>
            {
                ps.map(post=>{
                    return(
                        <div key={post._id}>
                            <h3>{post.title}</h3>
                            <span>{post.content}</span>
                        </div>
                    );
                })
            }
        </>
    )
}

export default preRenderingInClientSideDataFecthing;

export async function getServerSideProps(context){
    const {query} = context;
    const {catId} = query;
    const queryStr = catId?'catId=63294e6002e3e94e7b30d5d0':'';
    const response = await fetch(`http://13.214.58.126:3001/posts/paginate/1?${queryStr}`);
    const resData = await response.json();
    return{
        props:{
            posts:resData.result
        }
    }
}