import React from "react";
import Consumer from "../consumer";
import FoodsContainer from "../FoodsContainer/FoodsContainer";

function HomePage(props) {
    const authenticated = props.auth.isAuthenticated();
    
    const logout = () => {
        props.auth.logout();
        props.history.replace("/");
    };

    if (authenticated) {
        const { name } = props.auth.getProfile();
        return (
            <div>
                <h2>Welcome back, {name}</h2>
                <button onClick={logout}>Log Out</button>
                <br /><br />
                <Consumer>
                    <FoodsContainer />
                </Consumer>
            </div>
        );
    }

    return (
        <div>
            <p>Welcome, new user. Please log in.</p>
            <button onClick={props.auth.login}>Log In</button>
        </div>
    );
}

export default HomePage;
