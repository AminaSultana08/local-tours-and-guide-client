

const BookingCard = ({booking}) => {
    const {_id,serviceName,photo,providerName,providerPhoto,email,address,price,date,description} = booking
    return (
        <div>
        <div className="relative ml-5 font-Playpen text-amber-600 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border  shadow-md dark:bg-zinc-700 dark:text-white ">
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
                    className=" whitespace-normal break-words rounded-lg bg-gradient-to-r from-red-500 to-amber-600 hover:from-pink-500 hover:to-yellow-500  dark:bg-white  py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                >
                   {providerName}
                </div>
               
            </div>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
               {price}
            </p>
            </div>
         
    </div>
        </div>
    );
};

export default BookingCard;