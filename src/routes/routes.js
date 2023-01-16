import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import CandidateFrom from "../pages/register/candidate/CandidateFrom";
import EmployerFrom from "../pages/register/employer/EmployerFrom";
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
            },
            {
                path: '/candidateFrom',
                element: <CandidateFrom />
            },
            {
                path: '/employerFrom',
                element: <EmployerFrom />
            }

        ]
    }

]);


export default routes;