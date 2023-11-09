import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { RiServiceFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { BsHouseAddFill } from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";

const Dashboard = () => {
    return (
        <div >
           <Navbar></Navbar>
           <div className="w-11/12 mx-auto mt-44 font-Playpen ">
            <div className="grid py-5 mt-48 grid-cols-12 gap-5   min-h-screen">
                <div className="bg-white col-span-3 h-full flex flex-col  items-center text-amber-600 ">
                   <NavLink to='/dashboard' className="p-2 my-3 mx-2 rounded-2xl font-Playpen font-bold flex items-center justify-center gap-2 hover:bg-amber-100 border-1 border-amber-100 w-full hover:text-amber-600" ><button className="btn text-white rounded-md bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500 p-2"><MdSpaceDashboard/> </button>Dashboard</NavLink>
                   <NavLink to='/dashboard/myService' className="p-2 my-3 mx-2 rounded-2xl font-Playpen font-bold flex hover:bg-amber-100 items-center justify-center gap-2   border-1 border-amber-100 w-full hover:text-amber-500" ><button className="btn text-white rounded-md bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500 p-2"><RiServiceFill/> </button>Manage Services</NavLink>
                   <NavLink to='/dashboard/addService' className="p-2 my-3 mx-2 rounded-2xl font-Playpen font-bold flex items-center justify-center gap-2  hover:bg-amber-100 border-1 border-amber-100  w-full hover:text-amber-500"><button className="btn text-white rounded-md bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500 p-2"><BsHouseAddFill/> </button> Add Services</NavLink>
                   <NavLink to='/dashboard/schedules' className="p-2 my-3 mx-2 rounded-2xl font-Playpen font-bold flex hover:bg-amber-100 items-center justify-center gap-2  hover:text-amber-500 border-1  border-amber-100  w-full"><button className="btn text-white rounded-md bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500 p-2"><AiFillSchedule/> </button> My Schedules</NavLink>
                </div>

                <div className=" col-span-9 h-full">
                   <Outlet></Outlet>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Dashboard;