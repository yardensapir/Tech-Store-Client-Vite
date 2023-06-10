import CrouselComponent from "../Carousel/CarouselComponent";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useQuery } from "@tanstack/react-query";
import { fetchProdcuts } from "../../libs/productQuerys";
import { ProductType } from "../../types/types";


const Slider = () => {


    const backGroundHover = "transition duration-200 hover:bg-primary-400"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    // Fetch Data
    const productQuery = useQuery({ queryKey: ['prodcuts'], queryFn: fetchProdcuts })
    if (productQuery.isLoading) return <h1>Loading..</h1>
    if (productQuery.isError) { return <pre>{JSON.stringify(productQuery.error)}</pre> }

    //    {productQuery.data.map((product: ProductType) => (<Card key={product.id} title={product.title} image={product.image} description={product.info} />))}


    return (
        <>

            {isAboveMediumScreens ? <>
                <div className="carousel bg-primary-200">

                    {productQuery.data.map((product: ProductType) => {
                        return <div key={product.id} id={product.id} className="carousel-item h-full w-full">
                            <CrouselComponent productId={product.id} image={product.image} title={product.title} secondTitle={product.secondTitle} info={product.info} />
                        </div>

                    })}
                </div>
                <div className=" bg-primary-200 flex justify-center w-full py-12 mb-2 gap-6">
                    {productQuery.data.map((product: ProductType) => <a key={product.id} href={`#${product.id}`} className={`sliderBtn cursor-pointer${backGroundHover}`}></a>)}

                </div>
            </>
                : <div>
                    <div className="carousel bg-primary-200 w-full">
                        {productQuery.data.map((product: ProductType) => {
                            return <div key={product.id} id={product.id} className="carousel-item h-full w-full">
                                <CrouselComponent productId={product.id} image={product.image} title={product.title} secondTitle={product.secondTitle} info={product.info} />
                            </div>

                        })}

                    </div>
                    <div className=" bg-primary-200 flex justify-center w-full py-12 mb-2 gap-6">
                        {productQuery.data.map((product: ProductType) => <a key={product.id} href={`#${product.id}`} className={`sliderBtn cursor-pointer${backGroundHover}`}></a>)}
                    </div>
                </div>}
        </>


    )
};
export default Slider;
