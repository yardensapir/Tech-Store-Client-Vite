import { useNavigate } from 'react-router-dom';
import prodcutImage from '../assets/ps5.webp'

const CrouselComponent = () => {

    const navigate = useNavigate()

    const backGroundHover = "transition duration-200 hover:bg-primary-400"
    return (
        <section className=" bg-primary-200 py-10 md:h-full md:pb-0 ">
            {/* Left Side */}
            <div className="mx-auto w-5/6  md:h-5/6 items-center md:flex mt-32" >

                <div className='flex flex-col items-start'>
                    <h1 className="text-[65px] drop-shadow-lg text-white text font-semibold font-poppins text-center">Product</h1>
                    <h3 className=" text-3xl font-light text-primary-300 mb-2">Second title</h3>
                    <p className=" text-sm text-white mt-2 mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio id eligendi nesciunt quisquam atque doloribus quos voluptatum placeat laborum possimus, expedita soluta, repellat, natus cum sed officiis facere dolorem</p>
                    <div className="mt-3 pb-6">
                        <button onClick={() => navigate("/product-details")} className={`bg-primary-100 px-3 py-2 rounded-lg text-white btn border-none`}>More info</button>
                    </div>
                </div>
                <div>
                    <img className='w-full drop-shadow-lg' src={prodcutImage} alt="" />
                </div>
            </div>
            <div className="flex justify-center p-10 gap-6 cursor-pointer">
                <span className={`bg-white h-1 w-8 ${backGroundHover}`}></span>
                <span className={`bg-white h-1 w-8 ${backGroundHover}`}></span>
                <span className={`bg-white h-1 w-8 ${backGroundHover}`}></span>
            </div>

         
        </section>

    )
};
export default CrouselComponent;