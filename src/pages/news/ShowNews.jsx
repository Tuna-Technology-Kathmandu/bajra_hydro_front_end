import React, { useState } from 'react'
import NewsCard from '../../components/card/NewsCard'
import { useGetBlogsQuery } from '../../services/Blogs'
import NewsCardShimmer from '../../components/Shimmer/NewsCardShimmer';
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg'
import useSmoothScrollTop from '../../customHook/useSmoothScrollTop';
import { useRef } from 'react';
import ReactPaginate from 'react-paginate';


const ShowNews = () => {
    const [page, setPage] = useState(1);
    const limit = 9;
    const category = 'News'
    const upRef = useRef(null);

    const ScrollTop = useSmoothScrollTop();
    const goTop = () => {
        setTimeout(() => {
            if (upRef.current) {
                ScrollTop(upRef.current, 600, 100);
            }
        }, 100);
    }

    const { data, isFetching, isError, error } = useGetBlogsQuery({ page, limit, category })
    let pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 6 }
    const { totalPages, currentPage } = pagination;

    console.log(error)
    return (
        <section className='px-[75px] max-md:px-[30px] my-20 max-md:my-10 max-sm:my-7'
            ref={upRef}
        >
            {isFetching && (
                <div className='grid grid-cols-3 gap-6 max-2x-l:grid-cols-2 max-[658px]:grid-cols-1'>
                    {
                        [...Array(3)].map((_, i) => <NewsCardShimmer key={i} />)
                    }
                </div>
            )}
            {isError && (
                <div className="col-span-full text-center loading mt-7">
                    <p>Sorry, we cannot get blogs at the moment...</p>
                </div>
            )}
            {!isFetching && !isError && data?.blogs?.length === 0 && (
                <div className="col-span-full text-center loading">
                    <p>No Blogs available at the moment...</p>
                </div>
            )}

            {!isFetching && !isError && data?.blogs?.length > 0 &&
                (
                    <div className='grid grid-cols-3 gap-6 max-2x-l:grid-cols-2 max-[658px]:grid-cols-1' >
                        {
                            data.blogs.map((item, index) => {
                                const {
                                    title = "Untitled",
                                    slug = "",
                                    id,
                                    content = "No content available",
                                    image_url = "",
                                    createdAt = new Date().toISOString(),
                                } = item;

                                return (
                                    <div key={id ?? index}>
                                        <NewsCard
                                            title={title}
                                            content={content}
                                            image={image_url}
                                            slug={slug}
                                            date={createdAt}
                                        />
                                    </div>
                                );
                            })}

                    </div>
                )}

            {totalPages > 1 && (
                <div className='flex items-center justify-center gap-3 h-[43px] mt-16'>
                    <button
                        className="md:w-[38px] md:h-[38px] w-[29px] h-[29px]  bg-lightblue hover:bg-hoverblue transition rounded-full relative cursor-pointer"
                        onClick={() => {
                            if (currentPage > 1) {
                                setPage(currentPage - 1);
                                goTop();
                            }

                        }
                        }
                        disabled={currentPage === 1}

                    >
                        <Triangle className="w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                    </button>

                    <ReactPaginate
                        previousLabel={null}
                        nextLabel={null}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={totalPages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={(event) => {
                            setPage(event.selected + 1);
                            goTop();
                        }}
                        containerClassName={`
                       flex items-center justify-center gap-[4px]
                       bg-lightblue rounded-full px-[10px] py-[3px]
                       md:h-[38px] h-[30px] transition-all duration-300
                   `}
                        pageClassName={`
                       w-[24px] h-[24px] md:w-[30px] md:h-[30px]
                       flex items-center justify-center
                       text-white text-[12px] md:text-sm
                       rounded-full cursor-pointer hover:text-black
                       transition-all duration-300
                   `}
                        activeClassName={`!bg-white !text-black font-bold`}
                        forcePage={currentPage - 1}
                    />

                    <button
                        className="w-[29px] md:w-[38px] md:h-[38px] sm:w-[29px] sm:h-[29px] h-[29px] bg-lightblue hover:bg-hoverblue transition rounded-full relative rotate-180 cursor-pointer"
                        onClick={() => {
                            goTop()
                            setPage(currentPage + 1)
                        }}
                        disabled={currentPage === totalPages}
                    >
                        <Triangle className="w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                    </button>
                </div>
            )}
        </section>
    )
}

export default ShowNews;