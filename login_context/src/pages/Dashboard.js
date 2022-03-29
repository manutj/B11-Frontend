import React from "react";
import { useAuthDispatch } from "../context/context";
import { logout } from "../context/actions";
const Dashboard = (props) => {
    const dispatch = useAuthDispatch();

    const handleLogout = () => {
        logout(dispatch);
        props.history.push("/login");
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
            <p>Welcome to the dashboard</p>
        </div>
    );
};

export default Dashboard;
