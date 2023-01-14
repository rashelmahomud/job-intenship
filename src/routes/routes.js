import { createBrowserRouter } from "react-router-dom";
import Home from "../app/pages/home/Home";
import Login from "../app/pages/Login";
import SignUp from "../app/pages/SignUp";
import Main from "../layout/main/Main";



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
            }

        ]
    }

]);


export default routes;