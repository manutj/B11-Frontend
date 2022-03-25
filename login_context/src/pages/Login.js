import React, { useState } from "react";

const handleClick = () => {
    console.log("Click");
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <div>
                <h1>Login Page</h1>
                <form>
                    <div>
                        <div>
                            <label>Username</label>
                            <input type={"text"} id={"email"} value={email} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type={"password"}
                                id={"password"}
                                value={password}
                            />
                        </div>
                    </div>
                    <button onClick={handleClick}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
