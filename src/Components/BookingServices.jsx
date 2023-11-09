import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const BookingServices = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))

    } ,[url] )
    return (
        <div>
           <h1> Bookings</h1>
        </div>
    );
};

export default BookingServices;