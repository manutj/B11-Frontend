import React, { useContext } from "react";
import List from "./List";
import AddToList from "./AddToList";
import Switch from "./Switch";
import { DarModeContext } from "../context/DarkModeContext";

function Container({ people, setPeople }) {
    const { darkMode } = useContext(DarModeContext);
    return (
        <div className={darkMode ? "darkContent" : "lightContent"}>
            <List people={people} setPeople={setPeople} />
            <AddToList people={people} setPeople={setPeople} />
            <Switch />
        </div>
    );
}

export default Container;
