import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useSearchParams} from "react-router-dom";

export const BlogPage = () => {
    const [posts,setPosts] = useState([]);
    const [searchParams, setSearchParams]=useSearchParams()

    const postQuerry = searchParams.get('post')
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=>setPosts(data))
        },[]);
    console.log(useLocation())
    return (
        <div>
            <h1>Our news</h1>
            <NavLink to='/posts/new'>Add new post</NavLink>
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

