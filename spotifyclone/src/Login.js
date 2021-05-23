import React from 'react';
import './Login.css';
import { loginUrl } from "./spotify";

function Login() {
    return (
        <div className="login">
            <h1>Login Page</h1>
            <img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-music-and-live-music-logo-with-neon-light-effect-vector-png-image_3669646.jpg" alt=""/>
            <a href={loginUrl}>Click to login</a>
            {/*logo*/}
        </div>
    )
}

export default Login;
