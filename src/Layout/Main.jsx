import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
          <div >
          <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>  
        </div>
    );
};

export default Main;