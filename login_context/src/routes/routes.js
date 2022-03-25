import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
const routes = [
    {
        exact: true,
        path: "/dashboard",
        component: Dashboard,
        isPrivate: true,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/*",
        component: NotFound,
    },
];

export default routes;
