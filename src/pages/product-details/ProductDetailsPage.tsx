import items from "../../data/data";
import RatingComponent from "../../components/Rating/RatingComponent";
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
const ProductDetailsPage = () => {

    const isProducInStock = items[0].countInStock > 0 ? "In Stock" : "Item not in stock"




    return (

        <main className="mt-24 h-full">
            <div className="flex items-start  justify-around px-3 py-2">

                <div className="p-6">
                    <img className=" h-[150px]" src={items[0].image} alt="" />
                    <img className=" h-[150px]" src={items[1].image} alt="" />
                    <img className=" h-[150px]" src={items[2].image} alt="" />
                </div>

                <div className="flex flex-col gap-2 items-start">
                    <hr />
                    <h1 className=" text-2xl">Product</h1>
                    <hr className="w-full" />
                    <RatingComponent value={items[0].rating} />
                    <hr className="w-full" />
                    <span className=" font-semibold"> Price: ${items[0].price}</span>
                    <hr className="w-full" />
                    <div>
                        <p className=" max-w-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aspernatur dicta voluptas vero fuga enim tempore nemo minima dolores! Ullam saepe eveniet cupiditate alias qui? Excepturi a error repellendus placeat?</p>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-evenly  w-[150px] bg-red-500 h-[300px] p-3">
                    <div>
                        <p>Status: {isProducInStock}</p>
                    </div>
                    <h2>Quantity</h2>
                    <div className="flex items-center gap-2">
                        <i className=" text-primary-100 text-xl">
                            <AiFillMinusCircle />
                        </i>
                        <p>1</p>
                        <i className=" text-primary-100 text-xl">
                            <AiFillPlusCircle />
                        </i>
                    </div>
                    <button>Add To cart</button>
                </div>
            </div>
            {/* Reviews */}
            <div className="flex flex-col w-1/5 mx-auto  justify-center" >
                <h2 className=" mb-3 font-semibold text-xl">Reviews</h2>

                {/* <div className="flex flex-col items-start gap-1">
                    <span>Yarden Sapir</span>
                    <RatingComponent value={items[0].rating} />
                    <span>Date Post:</span>
                    <div className="min-w-[400px]">
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, at. Accusantium, fuga, perferendis, voluptatibus necessitatibus quia doloremque quibusdam incidunt quasi accusamus at suscipit labore nam quos nostrum magnam iure officia?</p>
                        <hr />
                    </div>
                </div> */}
            </div>
        </main>


    )
};
export default ProductDetailsPage;









{/* <div className="flex flex-col gap-2 items-start">
<hr />
<h1 className=" text-2xl">Product</h1>
<hr className="w-full" />
<RatingComponent value={items[0].rating} />
<hr className="w-full" />
<span className=" font-semibold"> Price: ${items[0].price}</span>
<hr className="w-full" />
<div>
    <p className=" max-w-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aspernatur dicta voluptas vero fuga enim tempore nemo minima dolores! Ullam saepe eveniet cupiditate alias qui? Excepturi a error repellendus placeat?</p>
</div>
</div>  */}