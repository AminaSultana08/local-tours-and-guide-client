import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Service/Services";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleServiceDetail from "../Pages/SingleService/SingleServiceDetail";
import Dashboard from "../Layout/Dashboard";
import Title from "../Components/AnimatedText";
import MyServices from "../Pages/Dashboard/MyServices";
import AddServices from "../Pages/Dashboard/AddServices";
import MySchedules from "../Pages/Dashboard/MySchedules";




const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
               path:'/',
               element:<Home/>, 
               loader:()=> fetch('http://localhost:5000/services')
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/services/:id',
                element:<SingleServiceDetail></SingleServiceDetail>,
                
               
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard',
                element:<Title>Dashboard</Title>
            },
            {
                path:'/dashboard/myService',
                element:<MyServices></MyServices>
            },
            {
                path:'/dashboard/addService',
                element:<AddServices></AddServices>
            },
            {
                path:'/dashboard/schedules',
                element:<MySchedules></MySchedules>
            },
        ]
    }
])
   


export default router;