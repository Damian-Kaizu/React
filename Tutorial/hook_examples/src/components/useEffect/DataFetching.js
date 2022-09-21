import React, { useState, useEffect } from 'react'
import axios from 'axios';
function DataFetching() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);
    const handleClick = () => {
        setIdFromButtonClick(id);
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    return (
        <div>
            <ul>
                <input type="text" value={id} onChange={e => setId(e.target.value)} />
                <button onClick={handleClick}> Fetch Post</button>
                <h1>{post.title}</h1>
                {/* {posts.map(post =>
            
            { return (
            <div>
            <li key={post.id}> Title - {post.title}</li> 
            <li key={post.id}> Body - {post.body}</li>
            </div>
            )
            })} */}


            </ul>
        </div>
    )
}

export default DataFetching