import {  useState } from "react";
import { Helmet } from "react-helmet";



const SingleServiceDetail = () => {
    const [serviceDetails,setServiceDetails] = useState([])
   
   

    return (
        <div>
        <Helmet><title>👷‍♂️Single Service</title></Helmet>
            <h1 className='4xl'> Single Service is coming</h1>
           <div className="h-[1200px] w-[1200px] flex justify-center items-center " >
            details are coming
           </div>
        </div>
    );
};

export default SingleServiceDetail;