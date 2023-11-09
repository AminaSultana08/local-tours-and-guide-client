import { useContext } from "react";
import Title from "../../Components/AnimatedText";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

//Picture URL of the Service
// ○ Service Name,
// ○ Your name, (from Firebase user , not editable )
// ○ Your email, (from Firebase user , not editable )
// ○ Price,
// ○ Service Area,
// ○ Description
// ○ Add button
const AddServices = () => {
    const {user} = useContext(AuthContext)
    const handleAddService = e => {
        e.preventDefault()
        console.log('added');
        const form = e.target
        const serviceName = form.serviceName.value
        const photo = form.photo.value
        const providerName = form.providerName.value
        const providerPhoto = form.providerPhoto.value
        const email = form.email.value
        const address = form.address.value
        const price = form.price.value
        const description = form.description.value
      const newService = {serviceName,photo,providerName,providerPhoto,email,address,price,description}
       // console.log(serviceData);

        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newService)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        form.reset()
    }
  
    return (
        <div>
            <Title><h1>Add Service</h1></Title>
            <div>
                <section className="p-6 bg-red-200 dark:bg-gray-800 dark:text-gray-50">
                    <form onSubmit={handleAddService} className="container  flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900   justify-center items-center">

                            <div className="grid grid-cols-6 gap-4  justify-center items-center col-span-full lg:col-span-3">
                                <div className="form-control  col-span-full sm:col-span-3">
                                    <label className="text-sm">Service Name</label>
                                    <input
                                        name="serviceName"
                                        type="text"
                                        placeholder="Service Name" required
                                        className="w-full p-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="form-control col-span-full sm:col-span-3">
                                    <label className="text-sm">Photo</label>
                                    <input type="url" required name='photo' placeholder="photo-url" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="form-control col-span-full sm:col-span-3">
                                    <label className="text-sm">Provider Name</label>
                                    <input type="text" required name='providerName' placeholder="provider name" className="w-full rounded-md focus:ring p-2 focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" defaultValue={user?.displayName}  />
                                </div>
                                <div className="form-control col-span-full sm:col-span-3">
                                    <label className="text-sm">Email</label>
                                    <input  name="email" required  placeholder="Email" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" type="email" defaultValue={user?.email} />
                                </div>
                                <div className="form-control col-span-full sm:col-span-3">
                                    <label className="text-sm">Provider Photo</label>
                                    <input  name="providerPhoto" required  placeholder="provider photo-url" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" type="url"  />
                                </div>
                                <div className="form-control col-span-full sm:col-span-2">
                                    <label className="text-sm"> Service Area</label>
                                    <input name="address" required type="text" placeholder="address " className="w-full rounded-md focus:ring focus:ri p-2 focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className= "form-control col-span-full sm:col-span-2">
                                    <label className="text-sm">Price</label>
                                    <input name="price" required type="Number" placeholder="price" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>

                                <div className="form-control col-span-full">
                                    <label className="text-sm">Description </label>
                                    <textarea  name="description"  type="text" placeholder="description" className="w-full rounded-md p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>

                            </div>
                        </fieldset>
                        <button type="submit" className="px-4 mt-4 py-2 w-full bg-white dark:text-red-600  max-w-2xl mx-auto border rounded-md dark:border-gray-100">Add Service</button>

                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddServices;