// import { ReactComponent as Arrow } from '../../../assets/svg/blogArrow.svg';
import { useGetCeoQuery } from '../../../services/Ceo';


const ChairmanSection = () => {
    const position = 'ceo';
    const { data, isFetching, isError } = useGetCeoQuery({ position });

    if (isError) {
        return (
            <section className="w-full h-auto p-[75px] max-md:p-[30px]  flex flex-col items-center justify-center">
                <h2 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm font-semibold mb-2">Something went wrong!</h2>
                <p className="loading">Unable to load message. Please try again later.</p>
            </section>
        );
    }

    return (
        <section className="bg-[#48CAE41A]/60 w-full h-auto p-[75px] max-md:p-[30px] flex max-xl:flex-col justify-between items-center gap-10">
            {/* Left: Image or Shimmer */}
            <div className='h-[550px] w-[40%] max-2xl:w-[45%] max-2xl:h-[500px] max-sm:h-[400px] max-1xl:w-1/2 max-xl:w-full relative'>
                {isFetching ? (
                    <div className="w-full h-full bg-gray-300 animate-pulse rounded-md" />
                ) : (
                    <>
                        <img src={data?.messages[0].photo} className='w-full h-full object-cover bg-lightblue' alt={data?.messages[0].name} />
                        <div className='w-full p-5 bg-commonblue text-white absolute z-10 bottom-0 '>
                            <p className='lg:text-lg font-semibold tracking-[0.03em] md:text-base text-sm' >{data?.messages[0].name}</p>
                            <p className='lg:text-[15px] mt-2 font-medium tracking-[0.03em] md:text-sm text-xs'>{data?.messages[0].position}</p>
                        </div>
                    </>
                )}
            </div>

            {/* Right: Text content or shimmer */}
            <div className='w-[60%] max-xl:w-full'>
                {isFetching ? (
                    <div className="space-y-4 animate-pulse">
                        <div className="h-6 bg-gray-300 rounded w-1/2" />
                        <div className="h-5 bg-gray-300 rounded w-full" />
                        <div className="h-5 bg-gray-300 rounded w-full" />
                        <div className="h-5 bg-gray-300 rounded w-5/6" />
                        <div className="h-5 bg-gray-300 rounded w-2/3" />
                        <div className="h-5 bg-gray-300 rounded w-1/2" />
                        <div className="h-6 bg-gray-300 rounded w-1/3 mt-6" />
                    </div>
                ) : (
                    <>
                        <h1 className='font-bold text-[22px] max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px] mb-7'>
                            {`Message from ${data?.messages[0].position}`}
                        </h1>
                        <p className='text-justify font-medium text-sm max-2xl:text-[13px] max-sm:!text-xs leading-[40px] max-2xl:leading-[30px] max-sm:leading-[27px] mb-7 '>
                            {data?.messages[0].description || `It is with great pride and commitment that I extend my warmest greetings on behalf of Bajra Hydropower...`}
                        </p>
                        {/* <div className='flex gap-2 items-center cursor-pointer'>
                            <Arrow className='w-[26px] h-[26px] max-2xl:w-[24px] max-2xl:h-[20px] stroke fill-[#1637BA]' />
                            <p className='font-semibold text-base max-2xl:text-sm text-[#1637BA]'>Read More</p>
                        </div> */}
                    </>
                )}
            </div>
        </section>
    );
};

export default ChairmanSection;
