import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
          <div>
          <Navbar></Navbar>
            <Outlet></Outlet>
          </div>  
        </div>
    );
};

export default Main;