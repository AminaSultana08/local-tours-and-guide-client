import { useQuery } from "@tanstack/react-query"

const useBooking = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ['booking'],
        queryFn: async()=>{
            const data = await fetch ('http://localhost:5000/bookings')
            return await data.json()
           
    
        }
    })
    return {data,isLoading,isFetching,refetch}
};

export default useBooking;