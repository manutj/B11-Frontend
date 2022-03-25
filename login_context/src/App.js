import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import routes from "./routes/routes";
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
        <div className="App">
            <Router>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            path={route.path}
                            component={route.component}
                            key={route.path}
                        />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
