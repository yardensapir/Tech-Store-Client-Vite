import CrouselComponent from "./CrouselComponent";
import items from "../data/data";
import useMediaQuery from "../hooks/useMediaQuery";


const Slider = () => {

    const backGroundHover = "transition duration-200 hover:bg-primary-400"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");



    return (
        <>
            {isAboveMediumScreens ? <>
                <div className="carousel bg-primary-200 py-2 px-2 w-full h-full">
                    {items.map((item) => {
                        return <div id={item.id} className="carousel-item h-full w-full">
                            <CrouselComponent image={item.image} title={item.title} secondTitle={item.title} info={item.info} />
                        </div>
                    })}
                </div>
                <div className=" bg-primary-200 flex justify-center w-full py-6 gap-6">
                    {items.map((item) => <a href={`#${item.id}`} className={`sliderBtn cursor-pointer ${backGroundHover}`}></a>)}
                </div>
            </>
                : <div>
                    <div className="carousel bg-primary-200 w-full">
                        {items.map((item) => {
                            return <div id={item.id} className="carousel-item w-full">
                                <CrouselComponent image={item.image} title={item.title} secondTitle={item.title} info={item.info} /> </div>
                        })}

                    </div>
                    <div className=" bg-primary-200 flex justify-center w-full py-6 gap-6">
                        {items.map((item) => <a href={`#${item.id}`} className={`sliderBtn cursor-pointer ${backGroundHover}`}></a>)}
                    </div>
                </div>}
        </>


    )
};
export default Slider;
