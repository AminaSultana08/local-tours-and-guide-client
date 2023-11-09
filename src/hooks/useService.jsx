import { useQuery } from "@tanstack/react-query"

const useService = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ['service'],
        queryFn: async()=>{
            const data = await fetch ('http://localhost:5000/services')
            return await data.json()
           
    
        }
    })
    return {data,isLoading,isFetching,refetch}
};

export default useService;