import { AiOutlineClose } from "react-icons/ai";

const Modal = ({open,onClose,children}) => {
    return (
        <div >
            <div onClick={onClose} className={`fixed inset-0 flex   justify-center items-center transition-colors ${open? 'visible bg-black/20' : 'invisible' } `}>
                <div 
                onClick={(e)=>e.stopPropagation()}
                className={`bg-white rounded-xl shadow  mt-20 mb-24 p-3 transition-all ${open? 'scale-100 opacity-100' : "scale-125 opacity-0 " } `}>
                <button  onClick={onClose}
                className=" absolute btn  rounded-lg text-sm top-0  -bottom-1   right-10 p-1  hover:text-gray-100 text-grey-400"><AiOutlineClose className="text-red-600 hover:text-2xl h-auto "/>
                </button>
               
                {children}
                
               
                </div>
            </div>
        </div>
    );
};

export default Modal;