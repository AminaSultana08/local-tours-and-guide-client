
const Button = (props) => {
    return (
        
        <button   className="bg-indigo-500 text-xl btn-md text-white py-2 px-2 rounded md:ml-8 duration-500 hover:bg-indigo-600" >
        {props.children}
        </button>
    );
};

export default Button;