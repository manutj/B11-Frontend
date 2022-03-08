import React from "react";
import Title from "../../atoms/Title/Title";
import Article from "../../organisms/Article/Article";

const Home = () => {
    return (
        <>
            <Title title="Ejemplo de atomic design" />
            <Article
                title={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem placeat, neque recusandae maxime mollitia soluta"
                }
                text={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem placeat, neque recusandae maxime mollitia soluta, minima ipsum debitis ratione necessitatibus porro obcaecati reprehenderit repudiandae ducimus, molestias aut? Eius, fugiat eveniet."
                }
                image={{
                    src: "http://via.placeholder.com/640x360",
                    alt: "PlaceHold",
                }}
            />
        </>
    );
};

export default Home;
