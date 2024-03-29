import { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../slices/cartSlice';
import { ProductType } from '../../types/types';
type Props = {
    image: string;
    name: string;
    price: number;
    qty: number
    item: ProductType
};
const ShoppingCard = ({ image, name, price, qty, item }: Props) => {


    const [quantity, setQuantity] = useState(qty)
    const [isModalOpen, setIsModalOpen] = useState(false)


    const increaseItemQty = () => {
   
        if (item.countInStock === qty) {
            setIsModalOpen(true)
            return
        }
        setQuantity((prevQty) => prevQty + 1)
        addToCartHandler(item, quantity + 1)
    }


    const decreaseItemQty = () => {
        if (item.qty === 1) { return }
        setQuantity(item.qty - 1)
        addToCartHandler(item, item.qty - 1)
    }
    const dispatch = useDispatch()

    const addToCartHandler = async (product: ProductType, qty: number) => {

        dispatch(addToCart({ ...product, qty }));
    };

    const removeFromCartHandler = async (item: ProductType) => {

        dispatch(removeFromCart(item));
    };




    return (
        <div>

            <div className='flex flex-wrap justify-center items-center mt-3 gap-6 '>

                <img className='w-[120px]' src={image} alt="" />
                <span>{name}</span>
                <span>Price: ${price}</span>
                <div className="flex items-center  gap-3">
                    <h2 className=" font-semibold" >Quantity :</h2>
                    <i onClick={() => { decreaseItemQty() }} className=" cursor-pointer text-primary-100 text-2xl">
                        <AiFillMinusCircle />
                    </i>
                    <p>{quantity}</p>
                    <i onClick={() => increaseItemQty()} className=" cursor-pointer text-primary-100 text-2xl">
                        <AiFillPlusCircle />
                    </i>
                </div>

                <button onClick={() => removeFromCartHandler(item)} className='btn btn-outline'>Delete</button>
            </div>
            <hr className='mt-2' />

            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Sorry but this is the limmit quantity for the item 🙈</h3>
                        <p className="py-4">Hope you will find something else 😇</p>
                        <div className="modal-action ">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => setIsModalOpen(false)} className="btn btn-accent btn-outline">Close</button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
};
export default ShoppingCard;