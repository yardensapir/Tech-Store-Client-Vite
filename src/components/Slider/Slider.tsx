import CrouselComponent from "../Carousel/CarouselComponent";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ProductType } from "../../types/types";



type Props = {
    productQuery: [];
};

const Slider = ({ productQuery }: Props) => {
    const backGroundHover = "transition duration-200 hover:bg-primary-400"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <>
            {isAboveMediumScreens ? <>
                <div className="carousel bg-primary-200">

                    {productQuery.map((product: ProductType) => {
                        return <div key={product._id} id={product._id} className="carousel-item h-full w-full">
                            <CrouselComponent productId={product._id} image={product.image} name={product.name} info={product.description} />
                        </div>

                    })}
                </div>
                <div className=" bg-primary-200 flex justify-center w-full py-12 mb-2 gap-6">
                    {productQuery.map((product: ProductType) => <a key={product._id} href={`#${product._id}`} className={`sliderBtn cursor-pointer${backGroundHover}`}></a>)}

                </div>
            </>
                : <div>
                    <div className="carousel bg-primary-200 w-full">
                        {productQuery.map((product: ProductType) => {
                            return <div key={product._id} id={product._id} className="carousel-item h-full w-full">
                                <CrouselComponent productId={product._id} image={product.image} name={product.name} info={product.description} />
                            </div>

                        })}

                    </div>
                    <div className=" bg-primary-200 flex justify-center w-full py-12 mb-2 gap-6">
                        {productQuery.map((product: ProductType) => <a key={product._id} href={`#${product._id}`} className={`sliderBtn cursor-pointer${backGroundHover}`}></a>)}
                    </div>
                </div>}
        </>


    )
};
export default Slider;
