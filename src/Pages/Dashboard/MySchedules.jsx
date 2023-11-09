import { useContext, useEffect, useState } from "react";
import Title from "../../Components/AnimatedText";

import { AuthContext } from "../../Providers/AuthProvider";



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
           <Title><h1>My Schedules </h1></Title>
           <div>
            <h1> All bookings {bookings.length} </h1>
            <div>
               
            </div>
           </div>
        </div>
    );
};

export default MySchedules;