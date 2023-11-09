

import {  useNavigation } from "react-router-dom";
 import Loading from "../../Components/Loading";

import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const UpdateService = () => {
const {user} = useContext(AuthContext)
     const navigation = useNavigation()
     console.log(navigation);
     if(navigation.loading == 'loading' ) 
     return <Loading></Loading>
const service = useLoaderData()
console.log(service);

const {_id,serviceName,photo,providerName,providerPhoto,email,address,price,description}= service


const handleUpdateService=async (e) =>{
    e.preventDefault()
    console.log('updated');
    const form = e.target
    const updatedService ={
         serviceName : form.serviceName.value,
        photo : form.photo.value,
         providerName : form.providerName.value,
         providerPhoto : form.providerPhoto.value,
         email : form.email.value,
         address : form.address.value,
         price : form.price.value,
         description : form.description.value

    }
    console.log(updatedService);
    const res =await axios.put(`http://localhost:5000/services/${_id}`,updatedService)
    const data = await res.data

    console.log(data);
    if (data.modifiedCount>0){
        Swal.fire({
                        title: 'Success!',
                        text: 'Service Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
    }
    
}


    return (

        <div>
        
        <h1 className="text-4xl text-center mb-8">Update Product</h1>
        <section className="p-6 bg-red-200 dark:bg-gray-800 dark:text-gray-50">
        <form  onSubmit={handleUpdateService} className="container  flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900   justify-center items-center">

                <div className="grid grid-cols-6 gap-4  justify-center items-center col-span-full lg:col-span-3">
                    <div className="form-control  col-span-full sm:col-span-3">
                        <label className="text-sm">Service Name</label>
                        <input
                            name="serviceName"
                            type="text" defaultValue={serviceName}
                            placeholder="Service Name" required
                            className="w-full p-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="form-control col-span-full sm:col-span-3">
                        <label className="text-sm">Photo</label>
                        <input type="url" required name='photo' defaultValue={photo} placeholder="photo-url" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="form-control col-span-full sm:col-span-3">
                        <label className="text-sm">Provider Name</label>
                        <input type="text" required name='providerName' placeholder="provider name" className="w-full rounded-md focus:ring p-2 focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" defaultValue={providerName}  />
                    </div>
                    <div className="form-control col-span-full sm:col-span-3">
                        <label className="text-sm">Email</label>
                        <input  name="email" required  placeholder="Email" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" type="email" defaultValue={user?.email} />
                    </div>
                    <div className="form-control col-span-full sm:col-span-3">
                        <label className="text-sm">Provider Photo</label>
                        <input  name="providerPhoto" required defaultValue={providerPhoto}  placeholder="provider photo-url" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" type="url"  />
                    </div>
                    <div className="form-control col-span-full sm:col-span-2">
                        <label className="text-sm"> Service Area</label>
                        <input name="address" required type="text" defaultValue={address}  placeholder="address " className="w-full rounded-md focus:ring focus:ri p-2 focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className= "form-control col-span-full sm:col-span-2">
                        <label className="text-sm">Price</label>
                        <input name="price" required type="Number" defaultValue={price} placeholder="price" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>

                    <div className="form-control col-span-full">
                        <label className="text-sm">Description </label>
                        <textarea  name="description"  type="text" defaultValue={description} placeholder="description" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>

                </div>
            </fieldset>
            <button type="submit" className="px-4 mt-4 py-2 w-full bg-white dark:text-red-600  hover:bg-amber-500 hover:text-white max-w-2xl mx-auto border rounded-md dark:border-gray-100">Update Service</button>

        </form>
    </section>
    
        </div>
    );
};

export default UpdateService;