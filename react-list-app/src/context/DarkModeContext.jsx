import React, { createContext, useState } from "react";

const DarModeContext = createContext();

const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <DarModeContext.Provider value={{ darkMode, toggleDarkMode }}>
                {props.children}
            </DarModeContext.Provider>
        </div>
    );
};

export { DarModeContext, DarkModeProvider };
