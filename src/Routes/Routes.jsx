import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../components/Layout/Main";
import Home from "../components/Pages/Home/Home";
import Menu from "../components/Pages/Menu/Menu";
import Order from "../components/Pages/Order/Order";
import Login from "../components/Pages/Auth/Login";
import Register from "../components/Pages/Auth/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: '/about',
        element: <h1>Hello World</h1>
    }
])

export default router;