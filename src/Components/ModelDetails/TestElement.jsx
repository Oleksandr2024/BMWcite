import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const TestElement = () => {

const [posts, setPosts] = useState([])

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then( res => res.json() )
        .then(data => setPosts(data))
}, [])



console.log("posts: "+posts)

const postElements = posts.map(post => {
    return <Link 
                key={post.id}
                to={`/models/model-details-3/posts/${post.id}`}>
                <li>{post.id}
                </li>
            </Link>
})

    return(
        <div>
            { postElements }
        </div>
    )
}

export {TestElement}