import axios from "axios";

import { Link} from "react-router-dom";
import Swal from "sweetalert2";


const ManageServiceCard = ({service , refetch}) => {
   
   
    const {_id,serviceName,photo,providerName,providerPhoto,email,address,price,date,description} = service

    

    const handleDeleteBooking =()=>{
       
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {

                        axios
                        .delete(`https://local-tours-and-guide-server-lb9ypr0ed-amina-sultana-s-projects.vercel.app/services/${_id}`)
                        .then((res) => {
                            if(res?.data.deletedCount>0){
                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                      });
                                      
                            }
                        })
                    
                    }
                  });

            refetch()
        
        

    }

  
    return (
        <div >
        <div className="relative font-Playpen  flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-amber-600 shadow-md dark:bg-zinc-700 dark:text-white ">
                <div className="relative p-3 rounded-xl m-0 overflow-hidden text-gray-700 bg-transparent  shadow-none bg-clip-border">
                    <img 
                    className="rounded-3xl w-96 h-60"
                        src={photo}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="px-6 py-3 flex justify-center ">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {address}
                    </h4>
                  
                </div>
                <div className="px-6">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {serviceName}
                    </h4>
                    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700  dark:text-white ">
                       {description}
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex  items-center space-x-3">
                        <img
                            alt="natali craig"
                            src={providerPhoto}
                            className="relative inline-block object-cover object-center border-2 border-white rounded-full h-9 w-9 hover:z-10"
                            data-tooltip-target="author-1"
                        />
                        <div
                            data-tooltip="author-1"
                            className=" whitespace-normal break-words rounded-lg bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500  dark:bg-white dark:text-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                        >
                           {providerName}
                        </div>
                       
                    </div>
                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                       ${price}
                    </p>
                    </div>
                  <div className="flex justify-center items-center gap-5">
                  <Link to={`/dashboard/updateService/${_id}`}  > <button  className="btn  bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500  dark:bg-white text-white dark:text-black rounded-3xl px-3 py-1  mb-3 ">Update</button></Link>
                  <button onClick={handleDeleteBooking} className="btn bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500  text-white  rounded-3xl px-3 py-1 mb-3">Delete</button>
                  </div>
            </div>
        </div>
    );
};

export default ManageServiceCard;