import React from 'react';
import {NavLink,Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/" className={({isActive})=>isActive?'active-link':''}>Home</NavLink>
                <NavLink to="/posts" className={({isActive})=>isActive?'active-link':''}>Blog</NavLink>
                <NavLink to="/about" className={({isActive})=>isActive?'active-link':''}>About</NavLink>
            </header>

            <main className='container'>
                <Outlet/>
            </main>

            <footer>2022</footer>
        </>
    );
};
