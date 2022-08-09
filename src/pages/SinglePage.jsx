import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useNavigate} from "react-router-dom";


export const SinglePage = () => {
    const {id} = useParams()
    const [post, setPosts] = useState({});
    const navigate = useNavigate();

    const goBack = ()=>navigate(-1)  //на одну страницу назад
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [id]);
    return (
        <div>
            <button onClick={goBack}>Go back</button>
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
