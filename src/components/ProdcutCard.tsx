import { useNavigate } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

type Props = {
    image: string,
    title: string,
    description: string,
    actionBtn?: () => void;
};
const ProdcutCard = ({ image, title, description }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navigate = useNavigate()
    

    return <div className={isAboveMediumScreens ? 'items-center gap-6 p-3 ml-24 md:flex rounded-lg border-2 border-primary-400' : ""}>
        <div>
            <img className=" w-full p-3" src={image} alt="" />
        </div>
        <div>
            <h2 className="mb-3 mt-3 text-lg font-semibold text-primary-100">{title}</h2>
            <p className=" mb-3  ">{description}</p>
            <div className="rating rating-sm mb-2">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div className="flex justify-evenly mb-6  gap-3 items-center">
                <span className="  font-semibold text-lg">price: $100</span> <button onClick={()=>navigate("/product-details")} className="bg-primary-200 px-3 py-2 rounded-md text-white font-semibold transition duration-200 hover:bg-primary-100">See Prodcut</button>
            </div>
        </div>
    </div>
};
export default ProdcutCard;