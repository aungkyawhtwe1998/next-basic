import Link from "next/link";

function Blog({cats}){
    return(
        <>
            <h1>All Blog data {cats.length}</h1>
            {cats.map(cat=>{
                return<>
                <Link href={`/blog/${cat._id}`} passHref>
                <h3 key={cat.id}>{cat.name}, {cat._id}</h3>

                </Link>
                </>
            })}
        </>
    )
}
export default Blog;

//like get static props
//run only serverside
//use this method inside pages, do not use inside component
export async function getServerSideProps(){
    // const response = await fetch("http://13.214.58.126:3001/posts/byuser/6246bcf9690c539c210f4b6c");
    const response = await fetch("http://13.214.58.126:3001/cats");

    const data =await response.json();
    console.log(data);
    return {
        props:{
            cats:data.result
        }
    }
}