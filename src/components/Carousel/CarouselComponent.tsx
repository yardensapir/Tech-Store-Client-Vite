import { useNavigate } from 'react-router-dom';


type Props = {
    productId: string,
    image: string,
    name: string,
    info: string,
    actionBtn?: number
};
const CrouselComponent = ({ image, name, info, productId }: Props) => {

    const navigate = useNavigate()


    return (
        <div className="  w-full py-10 bg-primary-200 px-10 h-full">
            <div className="mx-auto w-5/6  md:h-5/6 items-center md:flex mt-32" >
                <div className='flex flex-col items-start'>

                    <h1 className=' drop-shadow-lg text-white font-poppins text-4xl w-[260px] font-bold'>{name}</h1>
                    <h3 className=" text-3xl font-light text-primary-300 mb-2">NOW IN STORE</h3>
                    <p className=" text-sm text-white mt-2 mb-2">{info}</p>
                    <div className="mt-3 pb-6">
                        <button onClick={() => navigate(`/product-details/${productId}`)} className={`bg-primary-100 px-3 py-2 rounded-lg text-white btn border-none`}>More info</button>
                    </div>
                </div>
                <div>
                    <img className=' w-full h-full drop-shadow-lg object-cover' src={image} alt="" />
                </div>
            </div>
        </div>

    )
};
export default CrouselComponent;

