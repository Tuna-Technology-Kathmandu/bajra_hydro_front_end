import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroHomeItem } from '../../localData/home/HeroHomeItem';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../style/components/HeroHome.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const HomeHero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className='h-screen w-full max-[1312px]:h-[650px] max-1xl:h-[550px] max-[639px]:h-[500px] max-[388px]:h-[422px]'>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                    clickable: true,  
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper w-full h-full">
                {

                    HeroHomeItem.map((item, index) => {

                        const { title, img, subTitle } = item;

                        return (

                            <SwiperSlide className='relative w-full h-full' key={index}>

                                <div className='w-full h-full bg-blue-500 overflow-hidden'>
                                    {activeIndex === index ? (
                                        <motion.img
                                            src={img}
                                            className="w-full h-full object-cover"
                                            initial={{ scale: 1 }}
                                            animate={{ scale: 1.1 }}
                                            transition={{ duration: 4, ease: 'easeOut' }}
                                            loading='lazy'
                                        />
                                    ) : (
                                        <img
                                            src={img}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>

                                <div className='absolute z-20 top-1/2 -translate-y-1/2  text-white left-1/2 -translate-x-1/2 text-center w-[760px]'>

                                    <div className='flex items-center gap-2 justify-center max-sm:gap-0.5'>

                                        <div className='w-32 max-2xl:w-24 max-1xl:w-20 max-m-d:w-12 max-sm:w-8 max-sm:hidden bg-white/50 h-[1px]'></div>

                                        <p className='font-light text-[20px] max-2xl:text-[16px] max-1xl:text-[14px] max-m-d:text-xs max-sm:w-[200px] tracking-wider text-white/70'>{subTitle}</p>

                                        <div className='w-32 max-2xl:w-24 max-1xl:w-20 max-m-d:w-12  max-sm:w-8 max-sm:hidden bg-white/50 h-[1px]'></div>

                                    </div>

                                    <h1 className="font-extrabold text-[45px] max-2xl:text-[35px] max-1xl:text-[28px] max-md:w-[550px] max-m-d:w-[400px] max-md:font-bold
                                    max-m-d:text-[24px] max-sm:text-[18px]
                                    max-md:mx-auto tracking-[0.03em] mt-10 max-md:mt-8 max-sm:mt-6 leading-[100%] max-sm:w-64">{title}</h1>

                                </div>

                                <div className='bg-black/50 absolute inset-0 z-0'></div>

                            </SwiperSlide>

                        )
                    })

                }
            </Swiper>
        </section>
    )
}
export default HomeHero