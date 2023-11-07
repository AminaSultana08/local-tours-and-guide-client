import {Helmet} from "react-helmet";

import LoginPage from "./LoginPage";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = ( ) => {
    const {signInUser,loginWithGithub,loginWithGoogle} = useContext(AuthContext)
    const [success,setSuccess] = useState()
    const [error,setError] = useState()

    const location = useLocation()
  const navigate = useNavigate()
  console.log('location here' ,location);


    const handleLogin =e=>{
        e.preventDefault()
        console.log('clicked');
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);

        signInUser(email,password)
        .then(result=>{
            const user = result.user
            console.log(user);
            setSuccess(success)
            Swal.fire({
                title: 'success!',
                text: 'User logged in',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            navigate(location?.state ? location.state : '/' )
        })
        .catch(error =>{
            console.log(error);
        })

        

    }

    const handleGithubLogin=()=>{
        loginWithGithub()
        .then(result=>{
            const user = result.user
            console.log(user);
            setSuccess(success)
            Swal.fire({
                title: 'success!',
                text: 'User logged in',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            navigate(location?.state ? location.state : '/' )
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleGoogleLogin = ()=>{
        loginWithGoogle()
        .then(result=>{
            const user = result.user
            console.log(user);
            setSuccess(success)
            Swal.fire({
                title: 'success!',
                text: 'User logged in',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            navigate(location?.state ? location.state : '/' )
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
        <Helmet><title>🔐WanderWisdom|Login</title> </Helmet>
        <div 
        className="text-white h-[100vh] flex items-center justify-center bg-cover "
        style={{'backgroundImage':'url(https://i.ibb.co/rpNxhVZ/sant-angelo.jpg) '}}
        >
        <LoginPage handleLogin={handleLogin} 
        handleGithubLogin={handleGithubLogin}
        handleGoogleLogin={handleGoogleLogin}
         ></LoginPage>
        </div>
        </div>
    );
};

export default Login;