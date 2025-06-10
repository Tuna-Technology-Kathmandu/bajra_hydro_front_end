// import { Swiper, SwiperSlide } from 'swiper/react'
// import { HeroHomeItem } from '../../localData/home/HeroHomeItem'
// import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import '../../style/components/HeroHome.css'
// import Img1 from '../../assets/images/heroHome1.png'
// import { motion } from 'framer-motion'
import bajra_video from '/video/bajra_banner_video.mp4'
// import { useState } from 'react'

const HomeHero = () => {
  // const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section>
      <div className='relative'>
        <video className='w-full' autoPlay muted loop>
          <source src={bajra_video} type='video/mp4' />
        </video>
        <div className='bg-black/50 absolute inset-0 z-0'></div>
      </div>
    </section>

    // <section
    //   className='h-screen min-[1600px]:h-screen max-[1600px]:h-screen max-[1598px]:h-[728px] max-[1540px]:h-[695px] max-[1480px]:h-[667px]
    // max-[1440px]:h-[655px] max-[1409px]:h-[640px] max-[1375px]:h-[625px] max-[1367px]:h-[620px] max-[1344px]:h-[610px] max-[1312px]:h-[599px]
    // max-[1276px]:h-[580px] max-[1268px]:h-[570px] max-[1244px]:h-[560px] max-[1224px]:h-[555px] max-[1198px]:h-[545px] max-[1176px]:h-[535px] max-[1168px]:h-[525px]
    // max-[1144px]:h-[514px] max-[1124px]:h-[514px] max-[1104px]:h-[503px] max-[1098px]:h-[496px] max-[1068px]:h-[488px] max-[1044px]:h-[477px]
    // max-[1016px]:h-[465px] max-[998px]:h-[457px] max-[980px]:h-[448px] max-[967px]:h-[439px] max-[944px]:h-[431px] max-[925px]:h-[423px]
    // max-[910px]:h-[415px] max-[898px]:h-[406px] max-[878px]:h-[399px] max-[868px]:h-[400px] max-[852px]:h-[387px] max-[844px]:h-[380px] max-[824px]:h-[375px] max-[804px]:h-[367px]
    // max-[798px]:h-[358px] max-[768px]:h-[351px] max-[753px]:h-[344px] max-[744px]:h-[339px] max-[724px]:h-[329px] max-[706px]:h-[324px] max-[698px]:h-[319px]
    // max-[679px]:h-[310px] max-[668px]:h-[305px] max-[653px]:h-[296px] max-[644px]:h-[294px] max-[625px]:h-[285px] max-[608px]:h-[277px]
    // max-[598px]:h-[273px] max-[587px]:h-[268px] max-[575px]:h-[263px] max-[553px]:h-[253px] max-[539px]:h-[246px] max-[524px]:h-[240px] max-[504px]:h-[228px]
    // max-[488px]:h-[223px] max-[475px]:h-[217px] max-[464px]:h-[211px] max-[444px]:h-[203px] max-[425px]:h-[193px] max-[418px]:h-[192px] max-[410px]:h-[186px]
    // max-[398px]:h-[180px] max-[388px]:h-[177px] max-[368px]:h-[168px] max-[344px]:h-[156px]'
    // >
    //   <Swiper
    //     modules={[Pagination, Autoplay]}
    //     pagination={{ clickable: true }}
    //     autoplay={{ delay: 4000, disableOnInteraction: false }}
    //     loop={true}
    //     onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
    //     onSwiper={swiper => setActiveIndex(swiper.realIndex)}
    //     className='mySwiper w-full h-full'
    //   >
    //     {HeroHomeItem.map((item, index) => {
    //       const { video } = item

    //       return (
    //         <SwiperSlide>
    //           <div className='w-full h-full bg-black overflow-hidden '>
    //             {/* {video ? ( */}
    //             <iframe
    //               width='100%'
    //               height='123%'
    //               src={`${video}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${
    //                 video.split('/embed/')[1]
    //               }`}
    //               className='absolute inset-0 object-cover h-[123%] max-h-[123%] w-[100%] max-w-[100%]'
    //               allow='autoplay; encrypted-media'
    //               allowFullScreen
    //               title={`Video Slide ${index}`}
    //             />
    //           </div>

    //           <div className='bg-black/50 absolute inset-0 z-0'></div>
    //         </SwiperSlide>
    //       )
    //     })}
    //   </Swiper>
    // </section>
  )
}

export default HomeHero
