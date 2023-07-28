import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

import RatingComponent from "../Rating/RatingComponent";


type Props = {
    productId: string,
    price: number,
    image: string,
    name: string,
    description: string,
    rating: number;
    numReviews: number,
    actionBtn?: () => void;
};
const ProdcutCard = ({ image, name, description, rating, numReviews, productId, price }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navigate = useNavigate()



    return <div className={isAboveMediumScreens ? 'items-center gap-6 p-3 ml-24 md:flex rounded-lg border-2 border-primary-400' : "sm:flex"}>
        <div>
            <img className=" w-full p-3 h-full" src={image} alt="" />
        </div>
        <div>
            <h2 className="mb-3 mt-3 text-lg font-semibold text-primary-100">{name}</h2>
            <p className=" mb-3  ">{description}</p>
            <div className="mb-2">
                <RatingComponent value={rating} />
                <span>{` ${numReviews} Reviews`}</span>
            </div>
            <div className="flex justify-evenly mb-6  gap-3 items-center">
                <span className="  font-semibold text-lg">price: ${ price}</span> <button onClick={() => navigate(`/product-details/${productId}`)} className="bg-primary-200 px-3 py-2 rounded-md text-white font-semibold transition duration-200 hover:bg-primary-100">See Prodcut</button>
            </div>
        </div>
    </div>
};
export default ProdcutCard;