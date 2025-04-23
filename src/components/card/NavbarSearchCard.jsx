import { Link } from "react-router-dom"

const NavbarSearchCard = ({ image, title,slug,pressX }) => {

    return (
          <Link to={`/single-news/${slug}`} onClick={pressX}>
        <div className="w-full h-auto p-3 rounded-[10px] bg-white/10 backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.15)] cursor-pointer">
            <div className="bg-slate-300 h-[200px] max-2xl-1l:h-[180px] max-md:h-[150px] max-[531px]:h-[120px] w-full overflow-hidden rounded-[9px]">
                {
                    image !== '' ? (
                        <img src={image} alt={title} className='w-full h-full object-cover '></img>
                    ) : (
                        <p className='font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px]'>No image available at the moment</p>
                    )
                }
            </div>
            <div>
                <h1 className='font-semibold text-base max-md:text-sm max-[531px]:text-xs mt-3'>{title.slice(0, 25) + '...'}</h1>
            </div>
        </div>
        </Link>
    )
}
export default NavbarSearchCard;