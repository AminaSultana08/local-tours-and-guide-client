import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Service/Services";
import SingleService from "../Pages/SingleService/SingleService";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
               path:'/',
               element:<Home/> 
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/singleService',
                element:<SingleService/>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
   


export default router;