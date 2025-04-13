import img from '../../../assets/images/heroHome1.png'
import { ReactComponent as Arrow } from '../../../assets/svg/blogArrow.svg';

const ChairmanSection = () => {
    return (
        <section className="bg-[#48CAE41A]/60 w-full h-auto p-[75px] max-md:p-[30px] flex max-xl:flex-col justify-between items-center gap-10">
            <div className='h-[550px] w-[40%] max-2xl:w-[45%] max-2xl:h-[500px] max-sm:h-[400px] max-1xl:w-1/2 max-xl:w-full'>
                <img src={img} className='w-full h-full object-cover'></img>
            </div>
            <div className='w-[60%] max-xl:w-full'>
                <h1 className='font-bold  text-[22px] max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px] mb-7'>Message from Chairman</h1>
                <p className='text-justify font-medium text-sm max-2xl:text-[13px] max-sm:!text-xs leading-[40px] max-2xl:leading-[30px] max-sm:leading-[27px] mb-7 '>
                    It is with great pride and commitment that I extend my warmest greetings on behalf of Bajra Hydropower. As we continue our journey towards a sustainable energy future, our mission remains steadfast—to harness Nepal’s abundant water resources and transform them into clean, renewable energy that powers communities, industries, and progress.

                    At Bajra Hydropower, we believe that hydropower is more than just electricity; it is the foundation of economic growth, environmental sustainability, and national energy security. Our team is dedicated to innovation, efficiency, and responsible development, ensuring that every project we undertake contributes to a greener and more prosperous Nepal.

                    The challenges in the energy sector are evolving, but so are we. Through advanced technology, strategic partnerships, and unwavering dedication, we are not only generating power but also driving a future where clean energy is accessible...
                </p>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <Arrow className='w-[26px] h-[26px] max-2xl:w-[24px] max-2xl:h-[20px] stroke fill-[#1637BA] ' />
                    <p className='font-semibold text-base max-2xl:text-sm text-[#1637BA]'>Read More</p>
                </div>
            </div>
        </section>
    )
}
export default ChairmanSection;