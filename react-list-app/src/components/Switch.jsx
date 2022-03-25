import React, { useContext } from "react";
import { DarModeContext } from "../context/DarkModeContext";

const Switch = () => {
    const { darkMode, toggleDarkMode } = useContext(DarModeContext);
    const handleClick = () => {
        toggleDarkMode();
    };
    return (
        <div className="switch">
            <p onClick={handleClick}>
                {darkMode ? "Modo oscuro activado" : "Modo oscuro desactivado"}
            </p>
        </div>
    );
};

export default Switch;
