import React from "react";

const AddToList = () => (
    <div className="AddToList">
        <input
            type="text"
            name="name"
            placeholder="Name"
            className="AddToList__input"
        />
        <input
            type="text"
            name="age"
            placeholder="Age"
            className="AddToList__input"
        />
        <input
            type="text"
            name="img"
            placeholder="Image Url"
            className="AddToList__input"
        />
        <textarea
            name="note"
            placeholder="Notes"
            className="AddToList__input"
        />
        <button className="AddToList__btn">Add to list</button>
    </div>
);

export default AddToList;
