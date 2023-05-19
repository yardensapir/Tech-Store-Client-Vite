import { RiStarSFill } from 'react-icons/ri'
const Rating = () => {
    return (
        <>
            <div className='flex gap-2 items-center text-amber-300 text-2xl'>
                <input type="checkbox" className="checkbox checkbox-accent" />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
            </div>
            <div className='flex gap-2 items-center text-amber-300 text-2xl'>
                <input type="checkbox" className="checkbox checkbox-accent" />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <span className=' text-slate-600'>
                    <RiStarSFill />
                </span>

            </div>
            <div className='flex gap-2 items-center text-amber-300 text-2xl'>
                <input type="checkbox" className="checkbox checkbox-accent" />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <span className=' flex text-slate-600'>
                    <RiStarSFill />
                    <RiStarSFill />
                </span>

            </div>
            <div className='flex gap-2 items-center text-amber-300 text-2xl'>
                <input type="checkbox" className="checkbox checkbox-accent" />
                <RiStarSFill />
                <RiStarSFill />
                <span className=' flex text-slate-600'>
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                </span>
            </div>
            <div className='flex gap-2 items-center text-amber-300 text-2xl'>
                <input type="checkbox" className="checkbox checkbox-accent" />
                <RiStarSFill />
                <span className=' flex text-slate-600'>
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                </span>
            </div>
        </>
    )
};
export default Rating;