import React, { useRef, useState } from 'react'
import { useGetGalleryAPIQuery } from '../../Services/GalleryAPI'
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg'
import GalleryShimmer from '../../components/shimmer/GalleryShimmer'
import ReactPaginate from 'react-paginate'
import useSmoothScrollTop from '../../customHook/useSmoothScrollTop'
import IframeVideos from './IframeVideo'

const ShowVideo = () => {
  const [page, setPage] = useState(1)
  const PaginationRef = useRef(null)
  const type='video';
  const limit=10;

  const { data, isFetching, isError } = useGetGalleryAPIQuery({ page, limit, type }) 
  const ScrollTop = useSmoothScrollTop()
 const videoData = data?.galleries ?? []

  // Extract pagination info from the backend response
  const pagination = data?.pagination ?? {
    totalPages: 1,
    currentPage: page,
  }        

  const { totalPages, currentPage } = pagination

  // Scroll to the top after changing page
  const goTop = () => {
    setTimeout(() => {
      if (PaginationRef.current) {
        ScrollTop(PaginationRef.current)
      }
    }, 100)
  }

  if (isFetching) {
    return (
      <div className='flex justify-center w-full px-[65px] mt-20 Loading'>
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
      <div
        className='flex justify-center w-full px-[65px] max-md:px-[30px]'
        ref={PaginationRef}
      >
        {videoData && videoData.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl'>
            {videoData.map(item => (
              <IframeVideos key={item._id} videoUrl={item.video_url} />
            ))}
          </div>
        ) : (
          <div className='text-gray-500 col-span-full text-center'>
            No videos available at the moment.
          </div>
        )}
      </div>

      {videoData.length > 0 && totalPages > 1 && (
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
    </>
  )
}

export default ShowVideo
