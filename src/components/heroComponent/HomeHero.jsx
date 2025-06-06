import { Swiper, SwiperSlide } from 'swiper/react'
import { HeroHomeItem } from '../../localData/home/HeroHomeItem'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import '../../style/components/HeroHome.css'
// import Img1 from '../../assets/images/heroHome1.png';
// import { motion } from 'framer-motion'
import { useState } from 'react'

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className='h-screen min-[1600px]:h-screen max-[1600px]:h-screen max-[1312px]:h-[587px] max-1xl:h-[435px] max-[768px]:h-[340px] max-[675px]:h-[300px] max-[575px]:h-[260px]  max-[539px]:h-[225px] max-[388px]:h-[165px] max-[488px]:h-[221px]'>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        onSwiper={swiper => setActiveIndex(swiper.realIndex)}
        className='mySwiper w-full h-full'
      >
        {HeroHomeItem.map((item, index) => {
          const { video } = item

          return (
            <SwiperSlide >
              <div className='w-full h-full bg-black overflow-hidden '>
                {/* {video ? ( */}
                  <iframe  width="100%" height="123%"
                    src={`${video}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${
                      video.split('/embed/')[1]
                    }`}
                    //className="h-full w-full object-cover absolute"               
                     className='absolute inset-0  object-cover h-[123%] max-h-[150%] w-[100%] max-w-[100%]'
                    
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title={`Video Slide ${index}`}
                  />
                {/* ) : activeIndex === index ? (
                  <motion.img
                    src={Img1}
                    className='w-full h-full object-cover'
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 4, ease: 'easeOut' }}
                    loading='lazy'
                  />
                ) : (
                  <img src={Img1} className='w-full h-full object-cover' />
                )} */}
              </div>

              {/* <div className='absolute z-20 top-1/2 -translate-y-1/2 text-white left-1/2 -translate-x-1/2 text-center w-[760px]'>
                <div className='flex items-center gap-2 justify-center max-sm:gap-0.5'>
                  <div className='w-32 max-2xl:w-24 max-1xl:w-20 max-m-d:w-12 max-sm:w-8 max-sm:hidden bg-white/50 h-[1px]'></div>
                  <p className='font-light text-[20px] max-2xl:text-[16px] max-1xl:text-[14px] max-m-d:text-xs max-sm:w-[200px] tracking-wider text-white/70'>
                    {subTitle}
                  </p>
                  <div className='w-32 max-2xl:w-24 max-1xl:w-20 max-m-d:w-12 max-sm:w-8 max-sm:hidden bg-white/50 h-[1px]'></div>
                </div>

                <h1
                  className='font-extrabold text-[45px] max-2xl:text-[35px] max-1xl:text-[28px] max-md:w-[550px] max-m-d:w-[400px] max-md:font-bold
                  max-m-d:text-[24px] max-sm:text-[18px]
                  max-md:mx-auto tracking-[0.03em] mt-10 max-md:mt-8 max-sm:mt-6 leading-[100%] max-sm:w-64'
                >
                  {title}
                </h1>
              </div> */}

              <div className='bg-black/40 absolute inset-0 z-0'></div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default HomeHero
