
import {Helmet} from "react-helmet";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
        <Helmet><title>🏡Home</title> </Helmet>
    <Banner></Banner>
            <h1 className="text-4xl font-Playfair ">Home</h1>
        </div>
    );
};

export default Home;