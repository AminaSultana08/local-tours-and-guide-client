import { useContext, useEffect, useState } from "react";
import Title from "../../Components/AnimatedText";

import { AuthContext } from "../../Providers/AuthProvider";
import BookingCard from "../../Components/BookingCard";



const MySchedules = () => {
    const {user} = useContext(AuthContext)
     const [bookings, setBookings] = useState([])

     const url =`http://localhost:5000/bookings?email=${user?.email}`
     useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           setBookings(data);
        })
     } ,[url])
     console.log(bookings);
   console.log(user);
     

   
    return (
        <div>
           <Title><h1 className="text-amber-600 font-Playpen">My Schedules </h1></Title>
           <div className="mt-10">
            
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 ml-16  lg:ml-0 md:ml-0 text-amber-600 ">
               {
                  bookings.map(booking =><BookingCard key={booking._id} booking={booking} ></BookingCard> )
               }
            </div>
           </div>
        </div>
    );
};

export default MySchedules;