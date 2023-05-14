import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/Home/Home";
import Main from "../../Component/Layout/Main";
import Login from "../../Component/Login/Login";

const router= createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children : [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    }
])
export default router;