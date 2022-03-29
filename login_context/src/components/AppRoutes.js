import { Route, Redirect } from "react-router-dom";

import { UseAuthStateContext } from "../context/context";
import routes from "../routes/routes";

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
    const userToken = UseAuthStateContext();
    console.log(userToken);
    return (
        <Route
            path={path}
            render={(props) =>
                isPrivate && !Boolean(userToken.token) ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
            {...rest}
        />
    );
};

export default AppRoutes;
