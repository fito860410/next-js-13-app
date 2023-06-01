import Link from "next/link"

/* Creando componente para el fetching de datos*/
const fetchSinglePosts = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
              revalidate: 60
        }
    })    
    .then(res => res.json())
}


export default async function Post ({params}){
    
    /* Recuperando el parámetro*/
    const {id} = params
    const post = await fetchSinglePosts(id)

    return (
        <article>
            <h1>{post.title}</h1>    
            <p>{post.body}</p>   
            <Link href="#">Ver comentarios</Link>
        </article>
    )
}

