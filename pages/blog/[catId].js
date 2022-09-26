function blogByCatId({posts}){
    return(
        <>
            <h1>Categories</h1>
            {
                posts.map(post=>{
                    return(
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <span>{post.content}</span>
                        </div>

                    )
                })
            }

        </>
    )

}
export default blogByCatId;

export async function getServerSideProps(context){
    const {params,req,res,query} = context;
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie',["school=BrighterMyanmar"])
    console.log(query);
    
    const response = await fetch(`http://13.214.58.126:3001/posts/bycat/${params.catId}`);
    const data = await response.json();
    return{
        props:{
            posts:data.result
        }
    }
}