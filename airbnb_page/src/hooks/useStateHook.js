import { useState } from "react";
import { useForm } from "./useForm";

const useStateHook = () => {
    // // Manejo de estados independiente
    // const [number1, setNumber1] = useState(0);
    // const [numbrer2, setNumber2] = useState(0);

    // // Manejo de multiples estados a traves de un objeto
    // const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });

    // return (
    //     <>
    //         <div>
    //             <button
    //                 onClick={() => {
    //                     setNumber1((c) => c + 1);
    //                 }}
    //             >
    //                 increment independent number three
    //             </button>

    //             <button
    //                 onClick={() => {
    //                     setNumber2((c) => c + 1);
    //                 }}
    //             >
    //                 increment independent number four
    //             </button>
    //         </div>

    //         <div>
    //             <button
    //                 onClick={() => {
    //                     setCount((CurrentState) => ({
    //                         count1: CurrentState.count1 + 1,
    //                         count2: CurrentState.count2 + 1,
    //                     }));
    //                 }}
    //             >
    //                 increment same time
    //             </button>
    //         </div>

    //         <div>count 1 (sameTime) : {count1}</div>
    //         <div>count 2 (sameTime): {count2}</div>

    //         <div>count 3 (independent) : {number1}</div>
    //         <div>count 4 (independent) : {numbrer2}</div>
    //     </>
    // );

    // MANEJO DE FORMULARIO CON UN ESTADO INDEPENDIENTE PARA CADA INPUT

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // return (
    //     <div>
    //         <input
    //             type="email"
    //             name="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <input
    //             type="password"
    //             name="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //         />
    //     </div>
    // );

    // MANEJO DE FORMULARIO MEDIANTE UN CUSTOM HOOK (useForm)

    const [values, handleChange] = useForm({ email: "", password: "" });

    return (
        <div>
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
        </div>
    );
};

export default useStateHook;
