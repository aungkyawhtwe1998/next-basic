import { useState, useEffect } from "react";

function dbFun(){
    const [loading ,setLoading]  = useState(true);
    const [tag, setTag] = useState([]);

    const loadData = async () => {
        const response = await fetch("http:13.214.58.126:3001/tags");
        const resData = await response.json();
        setLoading(false);
        setTag(resData.result)
    }

    useEffect(()=> loadData, []);

    return(
        <>
        {
            TimeRanges.map(tag => <h1 key={tag._id}>{tag.name}</h1>)
        }
        </>
    )
}

export default dbFun;