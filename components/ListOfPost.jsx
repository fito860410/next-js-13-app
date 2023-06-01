import Link from "next/link"
import { LikeButton } from "./LikeButton"

/* Creando componente para el fetching de datos*/
const fetchPosts = () => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`, {
        next: {
              revalidate: 60
        }
    })    
    .then(res => res.json())
}

export default async function ListOfPost () {

    const posts = await fetchPosts()

    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <Link href={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>            
                <LikeButton id={post.id}/>
            </Link>
        </article>
    ))           
   
}