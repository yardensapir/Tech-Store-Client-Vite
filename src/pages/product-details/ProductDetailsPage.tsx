
import RatingComponent from "../../components/Rating/RatingComponent";
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import ReviewComponent from "../../components/ReviewComp/ReviewComponent";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../slices/productsApiSlice";
import { useState } from "react";
import { addToCart } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";


const ProductDetailsPage = () => {



    const [qty, setQty] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false)


    // Fetch Data
    const { id: productId } = useParams()
    const dispatch = useDispatch()
    const { data: product, isLoading, error } = useGetProductDetailsQuery(productId)
    if (isLoading) { return <h1>Loading..</h1> }
    if (error) { return <div>{error.toString()}</div> }

    const increaseItemQty = () => {
        if (product.countInStock === qty) {
            setIsModalOpen(true)
            return
        }

        setQty((prevQty) => prevQty + 1)
    }
    const decreaseItemQty = () => {
        setQty(prevQty => {
            if (prevQty - 1 < 1) return 1
            return prevQty - 1
        })
    }
    const addToCartHandler = () => { dispatch(addToCart({ ...product, qty })) }

    const isProducInStock = product!.countInStock > 0 ? "In Stock" : "Item not in stock"

    return (
        <>
            <main className="flex flex-wrap items-start mt-24 p-2 md:h-full">
                <div className=" items-start  justify-around px-3 py-2 md:flex">
                    <div className="p-6 z-10">
                        <div id="first">
                            <img className=" h-[150px]" src={product!.image} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <hr />
                        <h1 className=" text-2xl">Product</h1>
                        <hr className="w-full" />
                        <div>

                            <RatingComponent value={product.rating} />
                            <span>{` ${product.numReviews} Reviews`}</span>
                        </div>
                        <hr className="w-full" />
                        <span className=" font-semibold"> Price: ${product.price}</span>
                        <hr className="w-full" />

                        <p className=" max-w-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aspernatur dicta voluptas vero fuga enim tempore nemo minima dolores! Ullam saepe eveniet cupiditate alias qui? Excepturi a error repellendus placeat?</p>


                    </div>


                </div>

                {/* Reviews */}
                <div className="flex flex-col gap-3 w-[400px] md:w-2/6 mx-auto " >
                    <div className="border-solid border-2 flex flex-col  gap-2  items-start p-3">
                        <p className=" font-semibold">Status: {isProducInStock}</p>
                        <hr className="w-full" />
                        <div className="flex items-center  gap-3">
                            <h2 className=" font-semibold" >Quantity :</h2>
                            <i onClick={() => decreaseItemQty()} className=" cursor-pointer text-primary-100 text-2xl">
                                <AiFillMinusCircle />
                            </i>
                            <p>{qty}</p>
                            <i onClick={() => increaseItemQty()} className=" cursor-pointer text-primary-100 text-2xl">
                                <AiFillPlusCircle />
                            </i>
                        </div>
                        <hr className="w-full" />
                        <button onClick={addToCartHandler} className="bg-primary-100 px-3 py-2 rounded-lg text-white btn border-none">Add To cart</button>
                    </div>
                    <h2 className=" mb-3 font-semibold text-xl">Reviews:</h2>
                    <ReviewComponent rating={product.rating} />
                    <h2 className=" mb-3 font-semibold text-xl">Write A Review</h2>
                    <div >
                        <textarea className=" bg-primary-300 w-full resize-none shadow-none mb-2 p-3" id="" ></textarea>
                        <select defaultValue={'default'} className="select bg-slate-200 select-ghost w-full max-w-xs">
                            <option value={"default"} disabled>Your Rating</option>
                            <option value="Svelte">1</option>
                            <option value="React">2</option>
                            <option value="React">3</option>
                            <option value="React">4</option>
                            <option value="React">5</option>
                        </select>

                    </div>
                    <button className="  mb-6 w-[100px] bg-primary-200 px-3 py-2 rounded-md text-white font-semibold transition duration-200 hover:bg-primary-100 hover:translate-y-[-3px]">Submit</button>
                </div>

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




            </main>

        </>


    )
};
export default ProductDetailsPage;








