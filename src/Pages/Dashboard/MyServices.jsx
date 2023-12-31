
import Title from "../../Components/AnimatedText";

import Loading from "../../Components/Loading";
import ManageServiceCard from "../../Components/ManageServiceCard";
import useService from "../../hooks/useService";


const MyServices = () => {
      const {data,isLoading,isFetching,refetch}   =  useService()
    console.log(data,isLoading,isFetching,refetch);
    if(isLoading == true){
        return <Loading></Loading>
    }
    return (
        <div>
            <Title><h1 className="text-amber-600 font-Playpen">Manage Services   </h1></Title>
            <div className="mt-5 ml-6 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3">
                {
                    data.map((service) =><ManageServiceCard key={service._id} service={service} refetch={refetch}  ></ManageServiceCard>)
                }
            </div>
        </div>
    );
};

export default MyServices;