import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";


const ErrorPage = () => {
    return (
        <div className="h-screen max-w-6xl mx-auto">
        <Navbar></Navbar>
        <div>
            
        <h1 className="text-6xl text-red-500 text-center">Wrong Path 404 page</h1>

        <Link to='/' ><button className="btn btn-primary flex justify-center rounded-lg p-5 items-center bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500  text-white" >Go Back</button></Link>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ErrorPage;