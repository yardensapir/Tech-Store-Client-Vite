import { Link } from 'react-router-dom';
import carousel1 from '../assets/carousel-1.png'
import carousel2 from '../assets/carousel-2.png'
import carousel3 from '../assets/carousel-3.png'
const CrouselComponent = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={carousel1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <Link className='text-white flex items-center' to="/product-details">
                        New Macbook Pro 2023
                    </Link>

                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={carousel2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <Link className='text-white flex items-center' to="/product-details">
                     New Books !
                    </Link>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={carousel3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <Link className='text-white flex items-center' to="/product-details">
                        New Cameras !
                    </Link>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
};
export default CrouselComponent;