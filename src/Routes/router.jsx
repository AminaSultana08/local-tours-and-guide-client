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
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../Pages/Dashboard/updateService";




const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
               path:'/',
               element:<Home/>, 
               loader:()=> fetch('https://local-tours-and-guide-server-lb9ypr0ed-amina-sultana-s-projects.vercel.app/services')
            },
            {
                path:'/services',
                element:<Services/>,
                loader:()=> fetch('https://local-tours-and-guide-server-lb9ypr0ed-amina-sultana-s-projects.vercel.app/services')
            },
            {
                path:'/services/:id',
                element:<PrivateRoute><SingleServiceDetail></SingleServiceDetail></PrivateRoute>,
                loader:({params})=>fetch(`https://local-tours-and-guide-server-lb9ypr0ed-amina-sultana-s-projects.vercel.app/services/${params.id}`) 
               
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
                element:<PrivateRoute><MyServices></MyServices></PrivateRoute>
               
            },
            {
                path:'/dashboard/updateService/:id',
                element:<PrivateRoute><UpdateService></UpdateService> </PrivateRoute>,
                loader:({params})=>fetch(`https://local-tours-and-guide-server-lb9ypr0ed-amina-sultana-s-projects.vercel.app/services/${params.id}`)
                
               
            },
            {
                path:'/dashboard/addService',
                element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path:'/dashboard/schedules',
                element:<PrivateRoute><MySchedules></MySchedules></PrivateRoute>
            },
            
        ]
    }
])
   


export default router;