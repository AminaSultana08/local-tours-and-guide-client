import { useQuery } from "@tanstack/react-query"

const useService = () => {
    const {data,isLoading,isFetching,refetch} = useQuery({
        queryKey: ['service'],
        queryFn: async()=>{
            const data = await fetch ('https://local-tours-and-guide-server-lb9ypr0ed-amina-sultana-s-projects.vercel.app/services')
            return await data.json()
           
    
        }
    })
    return {data,isLoading,isFetching,refetch}
};

export default useService;