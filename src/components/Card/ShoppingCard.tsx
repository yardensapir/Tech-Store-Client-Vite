import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

type Props = {
    image: string;
    name: string;
    price: number;
    qty: number
};
const ShoppingCard = ({ image, name, price, qty }: Props) => {
    return (
        <div>

            <div className='flex flex-wrap justify-center items-center mt-3 gap-6 '>
                
                <img className='w-[120px]' src={image} alt="" />
                <span>{name}</span>
                <span>Price: ${price}</span>
                <div className="flex items-center  gap-3">
                    <h2 className=" font-semibold" >Quantity :</h2>
                    <i className=" cursor-pointer text-primary-100 text-2xl">
                        <AiFillMinusCircle />
                    </i>
                    <p>{qty}</p>
                    <i className=" cursor-pointer text-primary-100 text-2xl">
                        <AiFillPlusCircle />
                    </i>
                </div>

          
                <button className='btn'>Delete</button>




            </div>
            <hr className='mt-2' />

        </div>
    )
};
export default ShoppingCard;