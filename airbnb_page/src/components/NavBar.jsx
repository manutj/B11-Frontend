import React from "react";
import logo from "../images/airbnb-logo.png";

function NavBar() {
    return (
        <nav>
            <img className="nav--logo" src={logo} alt="logo" />
        </nav>
    );
}

export { NavBar };
