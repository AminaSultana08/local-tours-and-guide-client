



import { useTheme } from "../../hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";

import { useContext, useState } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Logo from "./Logo";


const Navbar = () => {
    const {user,logOut}= useContext(AuthContext)
    const {changeTheme,mode} = useTheme()
    const handleLogOut=()=>{
        logOut()
        .then()
        .catch()

    }
    let navLinks = <>
    <li  className="text-xl bg-white font-Playpen dark:bg-zinc-700 mr-8 md:my-0 my-7"  ><NavLink to='/'      className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-amber-500 underline" : ""
              }>Home</NavLink> </li>
   
    <li className="text-xl mr-8  bg-white font-Playpen dark:bg-zinc-700 md:my-0 my-7"><NavLink to='/services'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-amber-500 underline" : ""
              }  >Services</NavLink> </li>
     {
      user && user?.uid? (
        <>
        <li className="text-xl mr-8 bg-white font-Playpen dark:bg-zinc-700 md:my-0 my-7"><NavLink to='/dashboard'  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-amber-500 underline" : ""
      }   >Dashboard</NavLink> </li>
      <span>{user?.displayName} </span>
      <span>{user?.photo} </span>
      <button onClick={handleLogOut}  className="btn bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500  text-white p-2 font-Playpen rounded-md mx-3">LogOut</button>
      

         </>
      ) : (
        <> <li className="text-xl mr-8 bg-white font-Playpen dark:bg-zinc-700 md:my-0 my-7"><NavLink to='/login'  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500  underline" : ""
      }   >Login</NavLink> </li> </>
      )
     }
    
    


    </>
    let [open , setOpen ] = useState(false)
    return (
        <div className="max-w-7xl mx-auto  ">
        <div className="shadow-md lg:max-w-7xl w-full fixed top-0 z-20 ">
        <div className="md:flex dark:bg-zinc-700 dark:text-white lg:flex items-center  bg-white bg-transparent  py-8 md:px-10 px-7 lg:px-10">
            <div className='w-full cursor-pointer  grid items-center justify-start  '>
            <Logo></Logo>
             </div>
            <div onClick={()=>setOpen(!open) } className="text-3xl font-Playpen absolute right-8 top-6 cursor-pointer md:hidden ">
            <ion-icon name={open? 'close':'menu'}></ion-icon> 
          
            </div>
            <ul className= {`absolute flex   md:static left-0 w-full md:auto justify-start md:z-auto z-[-1] md:flex lg:flex md:items-center pb-12 md:pb-0 md:pl-0 transition-all duration-500 ease-in md:my-0 my-7 lg:items-center text-xl md:ml-8  ${open? 'top-20 opacity-100': 'top-[-490px] opacity-0 md:opacity-100 ' }  `}>
            {navLinks}
           
          <div>
          <label  tabIndex={0} className="btn btn-ghost btn-circle avatar ">
          <div className="w-10 rounded-full flex">
          <img src={user?.photoURL} />
        </div>
      
        </label>
          </div>
            <button onClick={changeTheme} className=' btn text-white  dark:bg-white dark:text-red-500 bg-black m-3 rounded-3xl'> {mode=== 'dark'? <FiSun className="text-3xl" ></FiSun> : <FiMoon className="text-3xl"></FiMoon>} </button>
            </ul>
           
           
        </div>
    </div>
        </div>
    );
};

export default Navbar;