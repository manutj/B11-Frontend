import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
    return <img className="a__image" src={props.src} alt={props.alt}></img>;
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default Image;
