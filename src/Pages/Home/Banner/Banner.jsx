import bgVdo from '../../../assets/bgVdo.mp4'
const Banner = () => {
    
    return (
        <div>
            <div className='mt-10 mb-32 '>
               <video className='absolute  object-cover h-screen w-full justify-center  items-center' src={bgVdo} autoPlay loop muted controls/>
                
               <div className='relative w-full h-screen bg-black/50  mx-auto p-32 '>
                <p className='text-2xl mt-10 pt-10 flex text-center justify-center items-center text-white'>"Elevate Your  Experience with Our Expert Guides!"💖 <br/>
                "From Iconic Landmarks to Hidden Treasures, We've Got It All."🏖 🏞 </p>
               </div>
               
            </div>
        </div>
    );
};

export default Banner;