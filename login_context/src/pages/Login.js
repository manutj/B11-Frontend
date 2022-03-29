import React, { useState } from "react";
import { UseAuthStateContext, useAuthDispatch } from "../context/context";
import { loginUser } from "../context/actions";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAuthDispatch();
    const { loading } = UseAuthStateContext();

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            let response = await loginUser(dispatch, { email, password });
            if (!response.role) return;
            props.history.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>
                <h1>Login Page</h1>
                <form>
                    <div>
                        <div>
                            <label>Username</label>
                            <input
                                type={"text"}
                                id={"email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type={"password"}
                                id={"password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button onClick={handleClick} disabled={loading}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
