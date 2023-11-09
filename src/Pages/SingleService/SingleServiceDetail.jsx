

import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData} from "react-router-dom";

import Modal from "../../Components/modal";
import BookServiceForm from "../../Components/BookServiceForm";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

// import PopularServiceCard from "../Home/PopularServices/PopularServiceCard";





const SingleServiceDetail = ( ) => {
    const {user} = useContext(AuthContext)
    const [services , setServices] = useState()
    const singleService = useLoaderData()
    const [open , setOpen] = useState(false)
    const{ _id,serviceName,photo,providerName,providerPhoto,address,price,description}=singleService
    
useEffect(()=>{
    fetch('https://local-tours-and-guide-server-lb9ypr0ed-amina-sultana-s-projects.vercel.app/services')
    .then(res=>res.json() )
    .then(data=>{
        setServices(data);
    })
} ,[] )
console.log(services);
const handleBookService = e =>{
    e.preventDefault()
    console.log('booked');
    const form = e.target
    const serviceName = form.serviceName.value
    const photo = form.photo.value
    const providerName = form.providerName.value
    const providerPhoto = form.providerPhoto.value
    const email = form.email.value
    const address = form.address.value
    const price = form.price.value
    const date = form.date.value
  const booking = {serviceName,photo,providerName,providerPhoto,email,address,price,date}
  console.log(booking);

  fetch('https://local-tours-and-guide-server-lb9ypr0ed-amina-sultana-s-projects.vercel.app/bookings', {
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(booking)
  })
  .then(res =>res.json())
  .then(data =>{
    console.log(data)
    if(data.insertedId){
        Swal.fire({
            title: 'Success!',
            text: 'Service Booked Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
  })
}
    
    

   

    return (
        <div>
       <Helmet><title>👨‍🔧WanderWisdom|Single Service</title> </Helmet>
            
           <div className="h-[1200px] w-[1200px] flex justify-center items-center text-amber-600 font-Playpen mt-64 " >
            
            <div>
                <div className="flex mt-44 justify-center items-center">
               <div>
              
              
               <div className="relative flex flex-col mt-6 lg:mr-10  text-amber-700  shadow-md w-96 rounded-xl bg-clip-border">
 <div className="flex justify-center items-center bg-amber-100 font-Playpen ">
 <div className="p-6 text-center  ">
 
 <h5 className="block mb-2 font-sans  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
 {providerName}
 </h5>
 <p className="block font-sans antialiased font-light leading-relaxed text-inherit text-2xl ">
 {address}
 </p>
</div>
 </div>
 
</div>
               </div>
               <div>
               
               </div>
                </div>

                <div className="text-2xl my-10 mb-96">
                
                <div>
                <div className="flex ml-48 bg-amber-100 flex-col max-w-4xl p-6 space-y-6 justify-center mx-auto items-center rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex items-center space-x-4">
                    <img alt="" src={providerPhoto} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{providerName}</a>
                      
                    </div>
                </div>
                <div>
                    <img src={photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                   <div className="flex justify-between">
                   <h2 className="mb-1 text-xl font-semibold">{serviceName}</h2>
                   <p className="text-xl">Price:${price} </p>

                   </div>
                    <p className="text-sm dark:text-gray-400">{description} </p>
                   
                </div>
                <div >
                    <div >
                     <button onClick={()=>setOpen(true)} className="btn   bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500  block text-white  rounded-xl  text-xl  px-3 py-2  mx-auto ">Book Now</button>

                 <Modal open={open} onClose={()=>setOpen(false)}>
                 <div className="flex flex-col max-w-4xl gap-2 p-1  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mt-36">
                 <BookServiceForm handleBookService={handleBookService}  singleService={singleService} ></BookServiceForm>
	        
	
</div>
                 </Modal>
                  
                   
                </div>
            </div>
                </div>
                </div>
            </div>
            
           </div>
          
        </div>
        <div>
    { /**<h1 className="text-amber-700 max-w-5xl mx-auto mx py-4 px-4 bg-amber-100 mb=5 font-bold text-center text-4xl  font-Playpen pt-10 pb-8">Our Other Services</h1>*/}
       <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3 text-amber-600 font-Playpen">
     {/**
       {
        services.map(service =><PopularServiceCard key={service.id} service={service} ></PopularServiceCard> )

    }
     */}
       </div> 
       </div>
        </div>
    );
};

export default SingleServiceDetail;