
// const Navbar = () => {
//     return (
//         <div>
//             Navbar
//         </div>
//     );
// };

// export default Navbar;


import { useTheme } from "../../hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    const {changeTheme,mode} = useTheme()
    let navLinks = <>
    <li  className="text-xl mr-8 md:my-0 my-7"  ><NavLink to='/'      className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
              }>Home</NavLink> </li>
   
    <li className="text-xl mr-8  md:my-0 my-7"><NavLink to='/services'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
              }  >Services</NavLink> </li>
    
    <li className="text-xl mr-8  md:my-0 my-7"><NavLink to='/login'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
              }   >Login</NavLink> </li>

    </>
    let [open , setOpen ] = useState(false)
    return (
        <div >
        <div className="shadow-md w-full fixed top-0 z-20 ">
        <div className="md:flex dark:bg-zinc-700 dark:text-white lg:flex items-center justify-between bg-white py-8 md:px-10 px-7 lg:px-10">
            <div className='w-full cursor-pointer flex items-center '>
               <h1 className="text-4xl font-bold font-serif bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"> <span className=" text-5xl text-red-600">L</span>ogo</h1>

              
            </div>
            <div onClick={()=>setOpen(!open) } className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden ">
            <ion-icon name={open? 'close':'menu'}></ion-icon> 
          
            </div>
            <ul className= {`absolute md:static left-0 w-full md:auto bg-white md:z-auto z-[-1] md:flex lg:flex md:items-center pb-12 md:pb-0 md:pl-0 pl-9 transition-all duration-500 ease-in md:my-0 my-7 lg:items-center text-xl md:ml-8  ${open? 'top-20 opacity-100': 'top-[-490px] opacity-0 md:opacity-100 ' }  `}>
            {navLinks}
            <Button >Login</Button>
            <button onClick={changeTheme} className=' btn text-white  dark:bg-white dark:text-red-500 bg-black m-3 rounded-3xl'> {mode=== 'dark'? <FiSun className="text-3xl" ></FiSun> : <FiMoon className="text-3xl"></FiMoon>} </button>
            </ul>
           
           
        </div>
    </div>
        </div>
    );
};

export default Navbar;