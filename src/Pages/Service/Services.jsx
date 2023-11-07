import {Helmet} from "react-helmet";
import { useLoaderData } from "react-router-dom";
import PopularServiceCard from "../Home/PopularServices/PopularServiceCard";
import { useState } from "react";

const Services = () => {
  const services = useLoaderData()
  const [dataLength , setDataLength] = useState(6)
  console.log(services);
    return (
        <div>
        <Helmet><title>👨‍🔧WanderWisdom|Services</title> </Helmet>
          <div className=" h-full m-10 p-20 w-full">
          <h1 className="text-4xl">Services are coming</h1>
          <h1>all services {services.length} </h1>
          <div className="grid grid-cols-1 gap-6 items-center justify-center mx-auto px-5 md:px-0 lg:px-0 md:mx-5 lg:mx-80 ">
            
          {
            services.map(service=><PopularServiceCard 
                 key={service._id}
                 service={service}
                ></PopularServiceCard>)
        }
          </div>
          <div className="flex justify-center">
          <div className={dataLength ===services.length? 'hidden' : ''}>
          <button onClick={()=>{setDataLength(services.length)}} className="btn    bg-amber-500 font-Playfair font-bold  text-white btn-primary px-5  py-3 my-10 block w-full">Show All</button>
          </div>
         </div>
          </div>
        </div>
    );
};

export default Services;