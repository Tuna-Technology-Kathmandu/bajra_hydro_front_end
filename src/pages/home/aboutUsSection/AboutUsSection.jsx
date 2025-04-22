import { Link } from 'react-router-dom';
import rafting from '../../../assets/images/rafting.webp';
import LinedHeading from '../../../components/heading/LinedHeading';

const AboutUsSection = () => {
    return (
        <section className="p-[75px] max-md:p-[30px] max-md:mt-6 max-[691px]:h-[800px] max-sm:h-[700px] ">
            <LinedHeading Title='Bajra Energy Ventures Pvt. Ltd' />
            <div className='relative mt-20 max-md:mt-10'>
                <div className='w-[837px] h-[590px] max-2xl:h-[500px] max-sm:h-[400px] max-2x-l:w-full relative z-10'>
                    <img src={rafting} className='w-full h-full object-cover'></img>
                </div>
                <div className='w-[541px] max-1md:w-full h-auto drop-shadow-lg bg-white max-[691px]:top-full absolute z-20 right-0 top-1/2 -translate-y-1/2 p-6'>
                    <h1 className='font-bold text-[22px] mb-4 max-md:text-[18px] max-sm:text-[14px]'>About Us</h1>
                    <p className='font-medium text-sm mb-4 max-md:text-xs max-sm:text-[11px] '>Bajra Energy Ventures Pvt. Ltd. is a private company owning a Micro - Hydropower Project of 24.80 MW.
                        The source of the energy is Bajra Madi River.
                    </p>
                    <div className='flex justify-between mb-4'>
                        <div className='border-r-2 border-l-[#705D56] w-1/2'>
                            <p className='font-semibold text-base mb-3 max-md:text-sm max-sm:text-xs '>Annual production</p>
                            <p className='text-black/80 font-medium text-sm max-md:text-xs max-sm:text-[10px]'>152,140,373 (kWh)</p>
                        </div>
                        <div className='w-1/2 text-end'>
                            <p className='font-semibold text-base mb-3 max-md:text-sm max-sm:text-xs'>Construction period</p>
                            <p className='text-black/80 font-medium text-sm max-md:text-xs max-sm:text-[10px]'>36 months</p>
                        </div>
                    </div>
                    <Link to='/about-us'>
                        <button className='bg-[#705D56] text-lg max-md:text-base max-sm:text-sm font-semibold text-white hover:bg-[#5F4C45] cursor-pointer max-1md:mt-3'>
                            See More
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    )
}
export default AboutUsSection;