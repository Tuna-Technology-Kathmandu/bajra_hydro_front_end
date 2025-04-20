
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/svg/blogArrow.svg';
import { DateFormatter } from '../../utils/DateFormatter';
// import { DateFormatter } from '../../utils/DateFormatter';

const NewsCard = ({ title, image, content, slug, date }) => {

    return (
        <div className="w-full h-auto">
            <div className=''>
                <div className="bg-slate-300 h-[260px] max-md:h-[200px] w-full overflow-hidden">
                    {
                        image !== '' ? (
                            <img src={image} alt={title} className='w-full h-full object-cover'></img>
                        ) : (
                            <p className='font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px]'>No image available at the moment</p>
                        )
                    }
                </div>
                <div className="relative -mt-11 w-[95%] min-h-[200px] n1:min-h-[250px] p-5 max-md:p-3 bg-white shadow-lg">
                    <h1 className='font-bold text-[15px] max-md:text-[13px] max-md:leading-[20px] h-[40px] leading-[25px]'>{title?.slice(0, 30) + '...'}</h1>
                    <div className='mt-3 flex justify-between'>
                        <p className="font-semibold text-[11px] max-md:text-[10px] relative inline-block mt-3">
                            {DateFormatter(date)}
                            <span className="block border-b-2 border-b-commonblue w-1/2 mt-1"></span>
                        </p>
                        {/* <p className='font-semibold text-[11px] max-md:text-[10px] max-md:leading-[18px] leading-[25px]'>-News Blogs</p> */}
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: content?.slice(0, 170) + '...' }} className='font-medium text-[10px] leading-[22px] mt-2 min-h-[90px]'>

                    </p>


                    {/* <NavLink to={`/blogs-singlepage/${items.slugs}`}> */}
                    <Link to={`/single-news/${slug}`}>
                        <div className='flex items-center gap-3 max-md:gap-2 mt-3 max-md:-mt-1 max-xs:mt-0'>
                            <p className='font-bold text-[11px] max-md:text-[9px] text-commonblue hover:text-DarkGolden cursor-pointer'>
                                Read More
                            </p>
                            <Arrow className='w-[16px] h-[12px] max-md:w-[14px] max-md:h-[14px] fill-commonblue' />
                        </div>
                    </Link>
                    {/* </NavLink> */}
                </div>
            </div>
        </div>
    )
}
export default NewsCard;