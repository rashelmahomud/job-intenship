import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import About from "../pages/page/About";
import AddJob from "../pages/page/AddJob";
import Getting from "../pages/page/Getting";
import Job from "../pages/page/Job";
import Order from "../pages/page/Order";
import Profile from "../pages/page/Profile";
import Reviews from "../pages/page/Reviews";
import Setting from "../pages/page/Setting";
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
            <PrivetRoute>
                <Dashboard />
            </PrivetRoute>

        ),
        children: [
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'job',
                element: <Job />
            },
            {
                path: 'add-job',
                element: <AddJob />
            },
            {
                path: 'order',
                element: <Order />
            },
            {
                path: 'setting',
                element: <Setting />
            },
            {
                path: 'gettings',
                element: <Getting />
            },
            {
                path: 'reviews',
                element: <Reviews />
            }
        ]

    }

]);


export default routes;