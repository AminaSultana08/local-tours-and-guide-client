import { useLoaderData } from "react-router-dom";
import Title from "../../Components/AnimatedText";


const MyServices = () => {
    const manageService = useLoaderData()
    return (
        <div>
            <Title><h1>Manage Services {manageService.length}  </h1></Title>
        </div>
    );
};

export default MyServices;