import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SIgnUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CartDetails from "../Pages/CartDetails/CartDetails";
import PrivateRoute from "../Provider/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
               element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5001/services/${params.id}`)
            },
            {
                path: '/cartdetails',
                element: <PrivateRoute><CartDetails></CartDetails></PrivateRoute>
            }
        ]
    }
])





export default router