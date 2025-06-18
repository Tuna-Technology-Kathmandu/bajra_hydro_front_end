import React, { useRef, useState } from 'react'
import { useGetGalleryAPIQuery } from '../../Services/GalleryAPI'
import GallerySmallImage from './GallerySmallImage'
import GalleryBigImage from './GalleryBigImage'
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg'
import GalleryShimmer from '../../components/shimmer/GalleryShimmer'
import ReactPaginate from 'react-paginate'
import { ReactComponent as Cross } from '../../assets/svg/cross.svg'
import useSmoothScrollTop from '../../customHook/useSmoothScrollTop'
// import IframeVideos from './IframeVideos'
import ShowVideo from './ShowVideo'

const ShowGallery = () => {
  const [page, setPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeTab, setActiveTab] = useState('images')
  const PaginationRef = useRef(null)
  const limit = 10
  const type = 'image'
  // for images only
  const { data, isFetching, isError } = useGetGalleryAPIQuery({ page, limit, type })
  const ImagesData = data?.galleries ?? []
  const pagination = data?.pagination ?? {
    totalPages: 1,
    currentPage: page,
  }
  const { totalPages, currentPage } = pagination

  const ScrollTop = useSmoothScrollTop()

  const goTop = () => {
    setTimeout(() => {
      if (PaginationRef.current) {
        ScrollTop(PaginationRef.current)
      }
    }, 100)
  }

  if (isFetching) {
    return (
      <div className='flex justify-center w-full px-[65px] mt-20 Loading '>
        <GalleryShimmer />
      </div>
    )
  }

  if (isError) {
    return (
      <div className='flex justify-center w-full px-[65px] mt-10 Loading'>
        Something went wrong...
      </div>
    )
  }

  return (
    <>
      <div className='flex justify-center px-[65px] max-md:px-[30px] mt-10'>
        <div className='border rounded-xl shadow-md border-gray-300 mb-10 py-1 px-4 flex gap-4'>
          {['images', 'videos'].map(tab => (
            <button
              key={tab}
              className={`relative font-semibold px-2 pb-1.5 transition-colors ${
                activeTab === tab
                  ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black after:border-b-4 after:rounded-xl cursor-pointer'
                  : 'text-gray-500 cursor-pointer'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* image section */}
      {activeTab === 'images' && (
        <div
          className='flex justify-center w-full px-[65px] max-md:px-[30px]'
          ref={PaginationRef}
        >
          <div className='w-full'>
            {ImagesData && ImagesData.length > 0 ? (
              <>
                {/* First Grid */}
                <div className='bg-white mb-10 w-full flex max-[734px]:flex-wrap justify-between gap-4 max-[767px]:gap-2 font-semibold text-[20px] leading-[30px] tracking-2% '>
                  <div className='relative rounded-lg flex-grow overflow-hidden group h-[460px] max-[1041px]:h-[300px]'>
                    <GalleryBigImage
                      img={ImagesData[0]?.image ?? ''}
                      onClick={() => setSelectedImage(ImagesData[0]?.image)}
                    />
                  </div>
                  <div className='w-[484px] max-[1041px]:w-64 max-[734px]:w-full grid grid-cols-2 max-[388px]:grid-cols-1 max-[388px]:h-[560px] gap-4 max-[767px]:gap-2 h-[460px] max-[1041px]:h-[300px]'>
                    <GallerySmallImage
                      img={ImagesData[1]?.image ?? ''}
                      onClick={() => setSelectedImage(ImagesData[1]?.image)}
                    />
                    <GallerySmallImage
                      img={ImagesData[2]?.image ?? ''}
                      onClick={() => setSelectedImage(ImagesData[2]?.image)}
                    />
                    <GallerySmallImage
                      img={ImagesData[3]?.image ?? ''}
                      onClick={() => setSelectedImage(ImagesData[3]?.image)}
                    />
                    <GallerySmallImage
                      img={ImagesData[4]?.image ?? ''}
                      onClick={() => setSelectedImage(ImagesData[4]?.image)}
                    />
                  </div>
                </div>
                <div className='bg-white mb-10 w-full flex max-[734px]:flex-wrap justify-between gap-4 max-[767px]:gap-2 font-semibold text-[20px] leading-[30px] tracking-2% '>
                  <div className='w-[484px] max-[1041px]:w-64 max-[734px]:w-full grid grid-cols-2 max-[388px]:grid-cols-1 max-[388px]:h-[560px] gap-4 max-[767px]:gap-2 h-[460px] max-[1041px]:h-[300px]'>
                    <GallerySmallImage
                      img={ImagesData[5]?.image ?? ''}
                      onClick={() => setSelectedImage(ImagesData[6]?.image)}
                    />
                    <GallerySmallImage
                      img={ImagesData[6]?.image ?? ''}
                      onClick={() => setSelectedImage(ImagesData[7]?.image)}
                    />
                    <GallerySmallImage
                      img={ImagesData[7]?.image ?? ''}
                      onClick={() => setSelectedImage(ImagesData[8]?.image)}
                    />
                    <GallerySmallImage
                      img={ImagesData[8]?.image ?? ''}
                      onClick={() => setSelectedImage(ImagesData[9]?.image)}
                    />
                  </div>
                  <div className='relative rounded-lg flex-grow overflow-hidden group h-[460px] max-[1041px]:h-[300px]'>
                    <GalleryBigImage
                      img={ImagesData[9]?.image ?? ''}
                      onClick={() => setSelectedImage(ImagesData[5]?.image)}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className='Loading text-gray-500 col-span-full text-center'>
                No Image available at the moment.
              </div>
            )}
          </div>
        </div>
      )}

      {/*video section */}
      {activeTab === 'videos' && (
       <ShowVideo/>
      )}

      {/* Pagination */}
      {activeTab === 'images' && totalPages > 1 && (
        <div className='flex items-center justify-center gap-3 h-[43px] mt-16'>
          <button
            className='md:w-[38px] md:h-[38px] w-[29px] h-[29px] bg-darkblue hover:bg-navy transition rounded-full relative cursor-pointer'
            onClick={() => {
              setPage(currentPage - 1)
              goTop()
            }}
            disabled={currentPage === 1}
          >
            <Triangle className='w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]' />
          </button>
          <ReactPaginate
            previousLabel={null}
            nextLabel={null}
            breakLabel={'...'}
            pageCount={totalPages}
            onPageChange={event => {
              setPage(event.selected + 1)
              goTop()
            }}
            containerClassName='flex items-center justify-center gap-[4px] bg-darkblue text-white rounded-full px-[10px] py-[3px] md:h-[38px] h-[30px]'
            pageClassName='w-[24px] h-[24px] md:w-[30px] md:h-[30px] flex items-center justify-center text-white text-[12px] md:text-sm rounded-full cursor-pointer transition-all duration-300'
            activeClassName='!bg-white !text-black font-bold'
            forcePage={currentPage - 1}
          />
          <button
            className='md:w-[38px] md:h-[38px] w-[29px] h-[29px] bg-darkblue hover:bg-navy transition rounded-full relative rotate-180 cursor-pointer'
            onClick={() => {
              setPage(currentPage + 1)
              goTop()
            }}
            disabled={currentPage === totalPages}
          >
            <Triangle className='w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]' />
          </button>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <button onClick={() => setSelectedImage(null)}>
            <Cross className='m-d:w-[50px] m-d:h-[50px] w-[38px] h-[38px] cursor-pointer absolute left-3 top-1 z-10 stroke-white' />
          </button>
          <img
            src={selectedImage}
            alt='Full View'
            className='max-w-[90%] max-h-[90%] rounded-lg shadow-lg'
          />
        </div>
      )}
    </>
  )
}
export default ShowGallery