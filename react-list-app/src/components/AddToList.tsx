import React, { useState } from "react";
import { PState as Props } from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
    people: Props["people"];
}

const AddToList: React.FC<IProps> = ({ setPeople, people }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = () => {
        if (!input.name || !input.age) return;

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note,
            },
        ]);

        setInput({
            name: "",
            age: "",
            img: "",
            note: "",
        });
    };

    return (
        <div className="AddToList">
            <input
                value={input.name}
                type="text"
                name="name"
                placeholder="Name"
                className="AddToList__input"
                onChange={handleChange}
            />
            <input
                value={input.age}
                type="number"
                name="age"
                placeholder="Age"
                className="AddToList__input"
                onChange={handleChange}
            />
            <input
                value={input.img}
                type="text"
                name="img"
                placeholder="Image Url"
                className="AddToList__input"
                onChange={handleChange}
            />
            <textarea
                value={input.note}
                name="note"
                placeholder="Notes"
                className="AddToList__input"
                onChange={handleChange}
            />
            <button onClick={handleClick} className="AddToList__btn">
                Add to list
            </button>
        </div>
    );
};

export default AddToList;
