import { useEffect, useState } from "react";
import Hello from "../components/Hello";

export default function UseEffectHook(props) {
    const [count, setCount] = useState(0);
    const [data, setData] = useState();
    const [show, setShow] = useState(true);

    useEffect(() => {
        //AQUI PODEMOS VISUALIZAR EL OBJETO DEL PERSONAJE QUE TRAE LA PROMESA PERO NO PODEMOS ACCEDER A SUS PROPIEDADES

        // const getData = async () => {
        //     const response = await fetch(
        //         `https://swapi.dev/api/people/${props.id}`
        //     );
        //     const newData = response.json();
        //     setData(newData);
        // };

        // getData();

        //PARA ACCEDER A LOS DATOS DEL OBJETO DEL PERSONAJE, DEBEMOS MAEJARLO COMO PROMESA
        fetch(`https://swapi.dev/api/people/${props.id}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [props.id]);

    data && console.log(data);

    return (
        <div>
            {/* <h1>Hola</h1> */}
            <h1>{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            {data ? (
                <div>{`Nombre del personaje:  ${data.name}`}</div>
            ) : (
                <div>no hay datos</div>
            )}
            <button onClick={() => setShow(!show)}>Toggle</button>

            {/* COMPONENTE QUE MONTAMOS Y DESMONTAMOS CON USE EFFECT Y USE STATE */}
            {show && <Hello />}
        </div>
    );
}
