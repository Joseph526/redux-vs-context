import React from "react";

function HomePage(props) {
    const { authenticated } = props;

    const logout = () => {
        props.auth.logout();
        props.history.push("/");
    };

    if (authenticated) {
        const { name } = props.auth.getProfile();
        return (
            <div>
                <h2>Welcome back, {name}</h2>
                <button onClick={logout}>Log Out</button>
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
