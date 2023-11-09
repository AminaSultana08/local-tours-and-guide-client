import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const BookingServices = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))

    } ,[url] )
    console.log(bookings);
    return (
        <div>
           <h1> Bookings {bookings.length} </h1>

        </div>
    );
};

export default BookingServices;