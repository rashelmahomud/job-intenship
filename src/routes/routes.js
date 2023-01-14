import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/register/Register";
import SignUp from "../pages/SignUp";



const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main />,
        children: [

            {
                path: '/',
                element: <Home />,
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    }

]);


export default routes;