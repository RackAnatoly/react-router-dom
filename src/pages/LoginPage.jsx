import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

export const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const user = form.username.value;

        signin(user, () => navigate(fromPage, {replase: true}))
    }
    const fromPage = location.state?.from?.pathname || '/';
    return (
        <div>
            <h1>login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name='username'/>
                </label>
                <button type='submit'>Login</button>
            </form>
            {/*//{fromPage}*/}
        </div>
    );
};
