import { useEffect } from "react";
export default function Hello() {
    useEffect(() => {
        // MOSTRAMOS UN MENSAJE EN CONSOLA CUANDO EL COMPONENTE SE MONTA EN EL VIRTUAL DOM
        console.log("render");

        // MOSTRAMOS UN MENSAJE EN CONSOLA CUANDO EL COMPONENTE SE DESMONTA EN EL VIRTUAL DOM (LIMPIEZA DEL USE EFFECT)
        return () => {
            console.log("unmount");
        };
    }, []);

    return <h1>Hola!</h1>;
}
