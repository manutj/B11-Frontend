import React from "react";
import PropTypes from "prop-types";
import Content from "../../molecules/Content/Content";

const Article = (props) => (
    <div className="o__article">
        <img src={props.image.src} alt={props.image.alt}></img>
        <Content image={props.image} title={props.title} text={props.text} />
    </div>
);

Article.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string,
};

export default Article;
