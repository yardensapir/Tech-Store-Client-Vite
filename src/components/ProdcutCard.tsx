type Props = {
    image: string,
    title: string,
    description: string,
    actionBtn?: () => void;
};
const ProdcutCard = ({ image, title, description }: Props) => {
    return <div className="flex items-center gap-6 p-3">
        <div>
            <img className="h-full w-full" src={image} alt="" />
        </div>
        <div>
            <h2 className="mb-3 text-lg font-semibold text-primary-100">{title}</h2>
            <p className=" mb-3  ">{description}</p>
            <div className="rating rating-sm mb-2">
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div className="flex gap-3 items-center">
                <span className="  font-semibold text-lg">price: $100</span> <button className="bg-primary-200 px-3 py-2 rounded-md text-white font-semibold transition duration-200 hover:bg-primary-100">See Prodcut</button>
            </div>
        </div>
    </div>
};
export default ProdcutCard;