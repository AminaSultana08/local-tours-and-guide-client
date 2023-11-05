import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";



const PopularServices = () => {
    const [popularServices, setPopularServices] = useState([])
    useEffect(()=>{
        fetch('servicesData.json')
        .then(res=>res.json())
        .then(data=>setPopularServices(data.services))
    } ,[])
    return (
        <div>
            <div className="dark:bg-zinc-500 font-Playfair">
            <h1 className="text-5xl text-center flex justify-center  mb-5 p-10  font-bold  bg-gradient-to-r from-red-900 via-orange-400 to-amber-200  text-transparent bg-clip-text ">Our Popular Services</h1>
            <p className="px-20 pb-10  mx-auto text-center text-lg text-amber-600 dark:text-orange-200">Embark on a captivating journey through our city's storied past with our expert guides. Uncover hidden gems and untold stories on our Historical Walking Tour, a truly immersive experience in time. Wander through cobblestone streets, visit charming squares, and marvel at stunning architecture that whispers tales of days gone by</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center justify-center mx-auto px-5 md:px-0 lg:px-0 md:mx-5 lg:mx-12 ">
              
                {
                    popularServices.map(popularService=><PopularServiceCard 
                        key={popularService._id}
                        popularService= {popularService}
                         ></PopularServiceCard> )
                }
            </div>

        </div>
    );
};

export default PopularServices;