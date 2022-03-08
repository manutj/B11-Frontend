import React from "react";
import PropTypes from "prop-types";

require("./Button.css");

const Button = (props) => {
    return <button className="a__button">{props.text}</button>;
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;
