import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const BookServiceForm = ({handleBookService} ) => {
    const {user} = useContext(AuthContext)
    return (
        <div>
      
        <section className="p-1 bg-red-200 dark:bg-gray-800 dark:text-gray-50">
        <form onSubmit={handleBookService} className="container  flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900   justify-center items-center">

                <div className="grid grid-cols-6 gap-4  justify-center items-center col-span-full lg:col-span-3">
                    <div className="form-control  col-span-full sm:col-span-3">
                        <label className="text-sm">Service Name</label>
                        <input
                            name="serviceName"
                            type="text"
                            placeholder="Service Name" required
                            className="w-full p-1 text-sm rounded-md border-2 border-gray-400 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="form-control col-span-full sm:col-span-3">
                        <label className="text-sm">Photo</label>
                        <input type="url" 
                        required name='photo' placeholder="photo-url" className="w-full rounded-md p-1 text-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="form-control col-span-full sm:col-span-3">
                        <label className="text-sm">Provider Name</label>
                        <input type="text" required name='providerName' placeholder="provider name" className="w-full rounded-md focus:ring p-1 text-sm focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" defaultValue={user?.displayName}  />
                    </div>
                    <div className="form-control col-span-full sm:col-span-3">
                        <label className="text-sm">Email</label>
                        <input  name="email" required  placeholder="Email" className="w-full rounded-md p-1 text-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" type="email" defaultValue={user?.email} />
                    </div>
                    <div className="form-control col-span-full sm:col-span-3">
                        <label className="text-sm">Provider Photo</label>
                        <input  name="providerPhoto" required  placeholder="provider photo-url" className="w-full rounded-md p-1 text-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" type="url"  />
                    </div>
                    <div className="form-control col-span-full sm:col-span-2">
                        <label className="text-sm"> Service Area</label>
                        <input name="address" required type="text" placeholder="address " className="w-full rounded-md focus:ring focus:ri p-1 text-sm focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className= "form-control col-span-full sm:col-span-2">
                        <label className="text-sm">Price</label>
                        <input name="price" required type="Number" placeholder="price" className="w-full rounded-md p-1 text-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>

                    <div className="form-control col-span-full">
                        <label className="text-sm">Date </label>
                        <input  name="date"  type="date" placeholder="date" className="w-full rounded-md p-1 text-sm focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                    </div>

                </div>
            </fieldset>
            
            <div className="flex  justify-center gap-3 mt-6  sm:flex-row">
            <button type="submit"
            className="btn absolute bottom-12  rounded-lg text-lg px-2 bg-white hover:bg-amber-500 hover:text-gray-100 text-grey-400">
            Purchase this Service </button>
           
           
           
            </div>
        </form>
    </section>
       

    
        </div>
    );
};

export default BookServiceForm;