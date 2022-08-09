import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";


export const SinglePage = () => {
    const {id} = useParams()
    const [post, setPosts] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [id]);
    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <NavLink to={`/posts/${id}/edit`}>Edit this post</NavLink>
                </>
            )}
        </div>
    );
};
