
import { useEffect, useState } from 'react'
import axios from 'axios'
const Feed = () => {

    const API = "https://imageuploaderfeedmernbackend.onrender.com";
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`${API}/posts`)
        .then((res)=>{
            console.log(res.data.posts)
            setPosts(res.data.posts)
        })
    }, [])

    return (
        <section className="feed-section">
            {
                posts.length > 0 ? (
                    posts.map(post => (
                        <div key={post.id} className="post-card">
                            <img src={post.image} alt="Post" />
                             
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts available.</p>
                )
            }
        </section>
    )
}

export default Feed
