import useSWR from "swr";

const fetcher = async()=>{
    const response = await fetch ("http://13.214.58.126:3001/tags");
    const resData = await response.json();
    return resData.result;
}

function Taggy(){
    
    const {data, error} = useSWR('taggy-fetch',fetcher);
    if(error) return <h1>Error Occur while fetching data</h1>
    if(!data) return <h1>Loading</h1>
    
    return(
        <>
            {
                data.map(tag=><h1 key ={tag._id}>{tag.name}</h1>)
            }
        </>
    )
}

export default Taggy;