import { useEffect, useState } from "react";
import axios from "axios";
// import Hello from "../components/Hello";

export default function UseEffectHook(props) {
    // const [count, setCount] = useState(0);
    // const [data, setData] = useState();
    // const [show, setShow] = useState(true);

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [currentId, setCurrentId] = useState(1);

    // useEffect(() => {
    //     // AQUI PODEMOS VISUALIZAR EL OBJETO DEL PERSONAJE QUE TRAE LA PROMESA PERO NO PODEMOS ACCEDER A SUS PROPIEDADES

    //     const getData = async () => {
    //         const response = await fetch(
    //             `https://swapi.dev/api/people/${props.id}`
    //         );
    //         const newData = response.json();
    //         setData(newData);
    //     };

    //     getData();

    //     // PARA ACCEDER A LOS DATOS DEL OBJETO DEL PERSONAJE, DEBEMOS MAEJARLO COMO PROMESA
    //     fetch(`https://swapi.dev/api/people/${props.id}`)
    //         .then((response) => response.json())
    //         .then((data) => setData(data));
    // }, [props.id]);

    useEffect(() => {
        const controller = new AbortController();
        const endpoint = "https://jsonplaceholder.typicode.com/todos";
        axios
            .get(endpoint, {
                signal: controller.signal,
            })
            .then(({ data }) => setUsers(data));
        return () => controller.abort();
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        const endpoint = "https://jsonplaceholder.typicode.com/todos";
        axios
            .get(`${endpoint}/${currentId}`, {
                signal: controller.signal,
            })
            .then(({ data }) => setUser(data));

        return () => controller.abort();
    }, [currentId]);

    // users && console.log(users);
    user && console.log(user);

    // data && console.log(data);

    const Previous = () => {
        setCurrentId((currentId) =>
            currentId === 1 ? currentId : currentId - 1
        );
    };

    const Next = () => {
        setCurrentId((currentId) =>
            currentId < users.length ? currentId + 1 : currentId
        );
    };

    return (
        // <div>
        //     {/* <h1>Hola</h1> */}
        //     <h1>{count}</h1>
        //     <button onClick={() => setCount((c) => c + 1)}>+</button>
        //     {data ? (
        //         <div>{`Nombre del personaje:  ${data.name}`}</div>
        //     ) : (
        //         <div>no hay datos</div>
        //     )}
        //     <button onClick={() => setShow(!show)}>Toggle</button>

        //     {/* COMPONENTE QUE MONTAMOS Y DESMONTAMOS CON USE EFFECT Y USE STATE */}
        //     {show && <Hello />}
        // </div>
        <div>
            <div>
                <h2>{user.title}</h2>
                <p>Occupped: {String(user.completed)}</p>

                <button onClick={Previous}>Anterior</button>
                <button onClick={Next}>Siguiente</button>
            </div>
        </div>
    );
}
