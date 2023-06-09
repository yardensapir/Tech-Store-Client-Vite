import CrouselComponent from "../Carousel/CarouselComponent";
import items from "../../data/data";
import useMediaQuery from "../../hooks/useMediaQuery";



const Slider = () => {


    const backGroundHover = "transition duration-200 hover:bg-primary-400"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");



    return (
        <>
            {isAboveMediumScreens ? <>
                <div className="carousel bg-primary-200">
                    {items.map((item) => {
                        return <div key={item.id} id={item.id} className="carousel-item h-full w-full">
                            <CrouselComponent productId={item.id} image={item.image} title={item.title} secondTitle={item.secondTitle} info={item.info} />
                        </div>
                    })}
                </div>
                <div className=" bg-primary-200 flex justify-center w-full py-12 mb-2 gap-6">
                    {items.map((item) => <a key={item.id} href={`#${item.id}`} className={`sliderBtn cursor-pointer${backGroundHover}`}></a>)}
                </div>
            </>
                : <div>
                    <div className="carousel bg-primary-200 w-full">
                        {items.map((item) => {
                            return <div key={item.id} id={item.id} className="carousel-item w-full">
                                <CrouselComponent productId={item.id} image={item.image} title={item.title} secondTitle={item.secondTitle} info={item.info} /> </div>
                        })}

                    </div>
                    <div className=" bg-primary-200 flex justify-center w-full py-12 mb-2 gap-6">
                        {items.map((item) => <a key={item.id} href={`#${item.id}`} className={`sliderBtn cursor-pointer ${backGroundHover}`}></a>)}
                    </div>
                </div>}
        </>


    )
};
export default Slider;
