import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import AppRoutes from "./components/AppRoutes";
import { AuthProvider } from "./context/context";
import "./App.css";

function App() {
    // const initialState = { count: 0 };

    // function reducer(state, action) {
    //     switch (action.type) {
    //         case "increment":
    //             return { count: state.count + 1 };
    //         case "decrement":
    //             return { count: state.count - 1 };
    //         default:
    //             throw new Error();
    //     }
    // }

    // function Counter() {
    //     const [state, dispatch] = useReducer(reducer, initialState);
    //     return (
    //         <>
    //             Count: {state.count}
    //             <button onClick={() => dispatch({ type: "decrement" })}>
    //                 -
    //             </button>
    //             <button onClick={() => dispatch({ type: "increment" })}>
    //                 +
    //             </button>
    //         </>
    //     );
    // }
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    {routes.map((route) => (
                        <AppRoutes
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            isPrivate={route.isPrivate}
                        />
                    ))}
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
