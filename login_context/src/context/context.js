import React, { createContext, useContext, useReducer } from "react";
import { initialState, AuthReducer } from "./reducer";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export function UseAuthStateContext() {
    const context = useContext(AuthStateContext);
    return context;
}

export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
};
