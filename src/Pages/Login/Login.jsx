import {Helmet} from "react-helmet";

import LoginPage from "./LoginPage";

const Login = () => {

    const handleLogin =e=>{
        e.preventDefault()
        console.log('clicked');
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);

    }
    return (
        <div>
        <Helmet><title>🔐Login</title> </Helmet>
        <div 
        className="text-white h-[100vh] flex items-center justify-center bg-cover "
        style={{'backgroundImage':'url(https://i.ibb.co/rpNxhVZ/sant-angelo.jpg) '}}
        >
        <LoginPage handleLogin={handleLogin} ></LoginPage>
        </div>
        </div>
    );
};

export default Login;