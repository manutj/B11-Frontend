import React from "react";

require("./Card.css");

const Card = () => {
    return (
        <div className="card">
            <span className="card__img"></span>
            <div className="card__content">
                <ul className="card__list">
                    <li className="card__item card__item--active">
                        Javascript
                    </li>
                    <li className="card__item">C#</li>
                    <li className="card__item">Python</li>
                </ul>
                <p className="card__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas voluptas impedit eum officiis ratione quos eveniet nam
                    rem earum adipisci?
                </p>
                <a href="#" className="card__link">
                    See more...
                </a>
            </div>
        </div>
    );
};

export default Card;
