import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Root from "../Root/Root";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])





export default router