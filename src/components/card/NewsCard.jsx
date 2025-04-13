
import { ReactComponent as Arrow } from '../../assets/svg/blogArrow.svg';

const NewsCard = () => {
    const items = {
        featured_image: '',
        title: 'lfkjnskfjsfnskf aslkfjhsfkljsfhkdsf skldjfhdfjhsfjhsfs sklfjhsf'

    }
    return (
        <div className="w-full h-auto">
            <div className=''>
                <div className="bg-slate-300 h-[260px] max-md:h-[200px] w-full overflow-hidden">
                    {
                        items.featured_image !== '' ? (
                            <img src={items.featured_image} alt={items.title} className='w-full h-full object-cover'></img>
                        ) : (
                            <p className='font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px]'>No image available at the moment</p>
                        )
                    }
                </div>
                <div className="relative -mt-11 w-[95%] min-h-[200px] n1:min-h-[250px] p-5 max-md:p-3 bg-white shadow-lg">
                    <h1 className='font-bold text-[15px] max-md:text-[13px] max-md:leading-[20px] min-h-[40px] leading-[25px]'>{items.title.slice(0, 75) + '...'}</h1>
                    <div className='mt-3 flex justify-between'>
                        <p className="font-semibold text-[11px] max-md:text-[10px] relative inline-block">
                            March 12, 2024
                            <span className="block border-b-2 border-b-commonblue w-1/2 mt-1"></span>
                        </p>
                        {/* <p className='font-semibold text-[11px] max-md:text-[10px] max-md:leading-[18px] leading-[25px]'>-News Blogs</p> */}
                    </div>
                    <p className='font-medium text-[10px] leading-[22px] mt-2 min-h-[90px]'>lkfjsf s;kdfljsdkf jasld;kfjs;dkfj a;sldkfj;sdkf ja;sdkfjas
                        a;slkjdfas fasldkfjsd fa;skldfjas fa;lskdfja ;sldkfj asd;flkajsfd
                    </p>


                    {/* <NavLink to={`/blogs-singlepage/${items.slugs}`}> */}
                    <div className='flex items-center gap-3 max-md:gap-2 mt-3 max-md:-mt-1 max-xs:mt-0'>
                        <p className='font-bold text-[11px] max-md:text-[9px] text-commonblue hover:text-DarkGolden cursor-pointer'>
                            Read More
                        </p>
                        <Arrow className='w-[16px] h-[12px] max-md:w-[14px] max-md:h-[14px] fill-commonblue' />
                    </div>
                    {/* </NavLink> */}
                </div>
            </div>
        </div>
    )
}
export default NewsCard;