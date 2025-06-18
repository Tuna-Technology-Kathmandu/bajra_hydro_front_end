import HeroHeading from "../heading/HeroHeading"
import { ReactComponent as Triangle } from '../../assets/svg/chevronDown.svg';

const CommonHero = ({ img, title }) => {
    return (
        <div className="relative h-[422px]">
            <img src={img} alt={title} className="w-full h-full"></img>
            <div className="w-full h-full bg-black/70 absolute inset-0 z-0"></div>
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 ">
                <HeroHeading title={title} />
                <div className="flex gap-1 font-semibold text-[15px] text-white/80 mt-5 justify-center items-center
                max-2x-l:text-[14px] max-md:text-[13px] max-1md:text-[12px]
                ">
                    <p>Home</p>
                    <Triangle className='fill-white stroke-none rotate-270 w-5 
                    max-2x-l:w-4 max-md:w-3 max-1md:w-2
                    ' />
                    <p className="-ml-1">{title}</p>
                </div>
            </div>
        </div>
    )
}
export default CommonHero