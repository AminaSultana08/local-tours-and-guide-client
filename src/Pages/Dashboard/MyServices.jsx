
import Title from "../../Components/AnimatedText";

import Loading from "../../Components/Loading";
import ManageServiceCard from "../../Components/ManageServiceCard";
import useBooking from "../../hooks/useBooking";


const MyServices = () => {
      const {data,isLoading,isFetching,refetch}   =  useBooking()
    console.log(data,isLoading,isFetching,refetch);
    if(isLoading == true){
        return <Loading></Loading>
    }
    return (
        <div>
            <Title><h1>Manage Services  {data.length} </h1></Title>
            <div className="mt-5 ml-6 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3">
                {
                    data.map((booking) =><ManageServiceCard key={booking._id} booking={booking} refetch={refetch}  ></ManageServiceCard>)
                }
            </div>
        </div>
    );
};

export default MyServices;