import { BsGithub} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const LoginPage = ({handleLogin,handleGithubLogin,handleGoogleLogin}) => {
    return (
        <div>
        <div className="bg-slate-800 border text-white border-slate-600  rounded-md mt-20 p-8 shadow-lg backdrop:filter backdrop:blur-lg bg-opacity-30 relative">
        <h1 className='text-4xl mb-6 font-bold text-center' >Login</h1>
            <form onSubmit={handleLogin} >
            <div className="relative my-4">
            <input className="text-white block w-72 font-bold py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" type="text" placeholder="Your Email" name="email" />
            <label className=" absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative my-4">
            <input className="text-white font-bold block w-72 py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" type="password" placeholder="Your Password" name="password" />
            <label className=" absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"  >Password</label>
            </div>
            <button className="w-full mb-4 text-[18px] rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300 mt-6"  type="submit" value="login">Login</button>
            </form>
            <div>
                <span>New Here? <Link to='/register' className='underline hover:text-blue-500' >Create an Account</Link> </span>
            </div>
        <h1 className="text-center  border-b my-3 border-zinc-400 text-white text-2xl" >Or</h1>
        <div className="flex gap-5 py-5  justify-center items-center ">
            <button onClick={handleGithubLogin} className="text-3xl"><BsGithub></BsGithub> </button>
            <button onClick={handleGoogleLogin} className="text-3xl" type=""><FcGoogle></FcGoogle> </button>
        </div>
            </div>
        </div>
    );
};

export default LoginPage;