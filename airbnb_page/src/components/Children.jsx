import { ChildrenTwo } from ".";
import { useState } from "react";
const Children = (props) => {
    //Uso del spread sintax
    const { state, ...allProps } = props;

    //Estado para manejar la actualizacion del texto que viene desde el input en el componente ChildrenTwo
    const [text, setText] = useState("");

    //Funcion Callback para manejar la actualizacion del texto que viene desde el input en el componente ChildrenTwo
    const handleTextOnchange = (n) => {
        setText(n);
    };

    return (
        <>
            {/* Enviamos la funcion callback al componente hijo y tambien los props como spread syntax */}
            <ChildrenTwo onChange={handleTextOnchange} {...allProps} />

            {/* Valor del input obtenido desde el componente ChildrenTwo (hijo) */}
            <p>the value of text is : {text}</p>

            {/* Operador ternario para mostrar una u otra cosa dependiendo de una condicion */}
            <div>{state ? <p>On!! 😃</p> : <p>Off!! 😞</p>}</div>
        </>
    );
};

//Definimos un valor por defecto a un prop en caso de que no nos lo manden
Children.defaultProps = {
    state: true,
};

export { Children };
