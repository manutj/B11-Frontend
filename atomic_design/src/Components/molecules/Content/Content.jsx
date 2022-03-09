import React from "react";
import PropTypes from "prop-types";
import Title from "../../atoms/Title/Title";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Image from "../../atoms/Image/Image";

const Content = (props) => (
    <div className="m__Content">
        <Image src={props.image.src} alt={props.image.alt} />
        <Title title={props.title} />
        <Paragraph text={props.text} />
    </div>
);

Content.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.object,
};

export default Content;
