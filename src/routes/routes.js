import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import About from "../pages/page/About";
import Profile from "../pages/page/Profile";
import CandidateFrom from "../pages/register/candidate/CandidateFrom";
import EmployerFrom from "../pages/register/employer/EmployerFrom";
import Register from "../pages/register/Register";
import SignUp from "../pages/SignUp";
import PrivetRoute from "../utils/PrivetRoute";



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
                path: '/candidateFrom',
                element: <CandidateFrom />
            },

            {
                path: '/employerFrom',
                element: <EmployerFrom />
            },
            // {
            //     path: '/profile',
            //     element: <Profile />
            // },

            {
                path: '/register',
                element: (
                    <PrivetRoute>
                        <Register />
                    </PrivetRoute>
                )
            },


        ]

    },
    {
        path: '/dashboard',
        element: (

            <Dashboard />

        ),
        children: [
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'about',
                element: <About />
            }
        ]

    }

]);


export default routes;