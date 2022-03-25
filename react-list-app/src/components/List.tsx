import React, { useContext } from "react";
import { PState as IProps } from "../App";

// const List = ({ people }: IProps) => {
//     console.log(people);
//     return <div>Hola como estas</div>;
// };

const List: React.FC<IProps> = ({ people }) => {
    const renderItem = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="list">
                    <div className="list__header">
                        <img className="list__img" src={person.url} alt="" />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="list__note">{person.note}</p>
                </li>
            );
        });
    };
    return <ul>{renderItem()}</ul>;
};

export default List;
