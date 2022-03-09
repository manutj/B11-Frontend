import React from "react";

require("./Nav.css");

const Nav = () => {
    return (
        <div className="navBar">
            <div className="navBar__links">
                <a className="navBar__item navBar--active" href="#">
                    Home
                </a>
                <a className="navbar__item" href="#">
                    About
                </a>
                <a href="#">Profile</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
};

export default Nav;
