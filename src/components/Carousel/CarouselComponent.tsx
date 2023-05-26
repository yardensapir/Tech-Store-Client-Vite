import { useNavigate } from 'react-router-dom';

type Props = {
    image: string,
    title: string,
    secondTitle: string,
    info: string,
    actionBtn?: number
};
const CrouselComponent = ({ image, title, secondTitle, info }: Props) => {

    const navigate = useNavigate()

    return (
        <div className=" bg-primary-200 w-full py-10 px-10 md:h-full md:pb-0">
            <div className="mx-auto w-5/6  md:h-5/6 items-center md:flex mt-32" >
                <div className='flex flex-col items-start'>
                    <h1 className="text-[65px] drop-shadow-lg text-white text font-semibold font-poppins text-center">{title}</h1>
                    <h3 className=" text-3xl font-light text-primary-300 mb-2">{secondTitle}</h3>
                    <p className=" text-sm text-white mt-2 mb-2">{info}</p>
                    <div className="mt-3 pb-6">
                        <button onClick={() => navigate("/product-details")} className={`bg-primary-100 px-3 py-2 rounded-lg text-white btn border-none`}>More info</button>
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