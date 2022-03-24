import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface PState {
    people: {
        name: string;
        age: number;
        url: string;
        note?: string;
    }[];
}

function App() {
    const [people, setPeople] = useState<PState["people"]>([
        {
            name: "Lebron James",
            age: 36,
            url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
            note: "Lorem Ipsum dolor",
        },
    ]);

    return (
        <div className="App">
            <h1>People List</h1>
            <List people={people} />
            <AddToList setPeople={setPeople} people={people} />
        </div>
    );
}

export default App;
