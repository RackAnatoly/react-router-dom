import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

export const BlogPage = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=>setPosts(data))
        },[]);

    return (
        <div>
            <h1>Our news</h1>
            {
                posts.map(post=>(
                    <NavLink key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </NavLink>
                ))
            }
        </div>
    );
};

