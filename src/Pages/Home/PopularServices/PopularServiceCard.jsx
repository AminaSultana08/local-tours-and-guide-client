/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const PopularServiceCard = ({service} ) => {
    const{_id,serviceName,photo,providerName,providerPhoto,address,price,description} = service
    return (
        <div>
            <div className="relative  flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md dark:bg-zinc-700 dark:text-white ">
                <div className="relative p-3 rounded-xl m-0 overflow-hidden text-gray-700 bg-transparent  shadow-none bg-clip-border">
                    <img 
                    className="rounded-3xl w-96 h-60"
                        src={service?.photo}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {service?.serviceName}
                    </h4>
                    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700  dark:text-white ">
                       {service?.description}
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex  items-center space-x-3">
                        <img
                            alt="natali craig"
                            src={service?.providerPhoto}
                            className="relative inline-block object-cover object-center border-2 border-white rounded-full h-9 w-9 hover:z-10"
                            data-tooltip-target="author-1"
                        />
                        <div
                            data-tooltip="author-1"
                            className=" whitespace-normal break-words rounded-lg bg-black dark:bg-white dark:text-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                        >
                           {service?.providerName}
                        </div>
                       
                    </div>
                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                        {service?.price}
                    </p>
                    </div>
                   <Link to={`/services/${_id}`}> <button className="btn w-1/2 bg-black dark:bg-white text-white dark:text-black rounded-3xl flex items-center justify-center px-3 py-1 ml-24 mb-3 ">View Details</button></Link>
            </div>
        </div>
    );
};

export default PopularServiceCard;