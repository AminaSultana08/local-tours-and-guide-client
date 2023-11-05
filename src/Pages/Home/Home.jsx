
import {Helmet} from "react-helmet";
import Banner from "./Banner/Banner";
import PopularServices from "./PopularServices/PopularServices";

const Home = () => {
    return (
        <div>
        <Helmet><title>🏡Home</title> </Helmet>
    <Banner></Banner>
            
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;