import { useState } from "react";

// HOOK PERSONALIZADO PARA MANEJAR FORMULARIO CON UN SOLO ESTADO, NOS SIRVE PARA OPTIMIZAR EL CODIGO CON EL USO DE UN SOLO ESTADO PARA TODOS LOS INPUTS

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    return [
        values,
        (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            });
        },
    ];
};
