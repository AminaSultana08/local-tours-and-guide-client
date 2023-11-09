import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser, logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister= e=>{
        e.preventDefault ()
        const form = e.target
        const name = form.name?.value
        const photo = form.photo?.value
        const email = form.email?.value
        const password = form.password?.value
        console.log(name,photo,email,password);

        createUser(email,password)
        .then(result =>{
            const user = result.user
            console.log(user);

            
      updateProfile (result.user,{
        displayName:name,
        photoURL:photo,
      })
      .then(()=>{
        console.log('User profile updated')
        logOut()
        navigate ('/login')

      
        
    } )
        })
        .catch(error=>{
            console.log(error);
        })
    }

    

    return (
        <div>
            <div  className="text-white font-Playpen h-[100vh] flex items-center justify-center bg-cover "
            style={{'backgroundImage':'url(https://i.ibb.co/rpNxhVZ/sant-angelo.jpg) '}}
            >
            <div className="bg-slate-800 border text-white border-slate-600  rounded-md mt-20 p-8 shadow-lg backdrop:filter backdrop:blur-lg bg-opacity-30 relative">
            <h1 className='text-4xl  font-bold text-center' >Register</h1>
                <form onSubmit={handleRegister}>
                <div className="relative my-4">
                <input className="text-white block w-72 font-bold py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" type="text" placeholder="Your Name" name="name" />
                <label className="text-black absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative my-4">
                <input className="text-white block w-72 font-bold py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" type="url" placeholder="Your Photo" name="photo" />
                <label className="text-black absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Your Photo</label>
                </div>
                <div className="relative my-4">
                <input className="text-white block w-72 font-bold py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" type="email" placeholder="Your Email" name="email" />
                <label className="text-black absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div className="relative my-4">
                <input className="text-white font-bold block w-72 py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" type="password" placeholder="Your Password" name="password" />
                <label className="text-black absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"  >Password</label>
                </div>
                <button className="w-full mb-4 text-[18px] rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300 mt-6"  type="submit" value="login">Register</button>
               
            </form>
            <div>
            <span>Have Account? <Link to='/login' className='underline hover:text-blue-500' >Login</Link> </span>
        </div>
        
                </div>
            </div>
        </div>
    );
};

export default Register;