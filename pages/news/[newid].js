import { useRouter } from "next/router";

function NewDetail({ newdata }) {
    const router = useRouter();
    if(router.isFallback){
        return(
            <>
                <h1>New Request page is loading ...</h1>
            </>
        );
    }
    return (
        <>
            <h1>{newdata.title}</h1>
            <h3>{newdata.body}</h3>
        </>
    )
}

export default NewDetail;

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const paths = data.map(d=>{
        return{
            params:{
                newid:`${d.id}`
            }
        }
    })
    return {
        paths: [
            { params: { newid: '1' } },
            { params: { newid: '2' } },
            { params: { newid: '3' } },
            { params: { newid: '4' } },
            { params: { newid: '5' } },
        ],
        //paths,

        fallback: true
        //true, false, blocking
    }
}
export async function getStaticProps(context) {
    console.log("I am being submitted every 10 second!")
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.newid}`);
    const data = await response.json();
    console.log(data);
    if(!data.id){
        return {
            notFound:true
        }
    }

    return {
        props: {
            newdata: data
        },
        revalidate:10 //incremental statice Regeneration ISR, 10 sec per time
    }
}