import { useNavigate } from "react-router-dom";


type Props = {
  image: string,
  title: string,
  description: string,
  actionBtn?: () => void;
};
const Card = ({ image, title, description }: Props) => {
  const navigate = useNavigate()

  return <div className="rounded-md border-2 border-primary-400 max-w-xs p-6 h-full mb-6">
    <div>
      <img className="h-[150px] w-full" src={image} alt="" />
    </div>
    <h3 className="mt-6 mb-3 text-lg font-semibold text-primary-100">{title}</h3>
    <p className=" mb-3 font-semibold text-primary-200">{description}</p>
    <button onClick={() => navigate("/product-list")} className="bg-primary-200 px-3 py-2 rounded-md text-white font-semibold transition duration-200 hover:bg-primary-100">See More Products</button>
  </div>;
};
export default Card;