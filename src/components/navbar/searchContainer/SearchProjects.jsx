import React, { useRef, useState } from 'react'
import NavbarSearchCard from '../../card/NavbarSearchCard';
import { useGetBlogsQuery } from '../../../services/Blogs';
import useSmoothScrollTop from '../../../customHook/useSmoothScrollTop';
import { ReactComponent as Triangle } from '../../../assets/svg/triangle.svg';
import ReactPaginate from 'react-paginate';
import NavbarSearchCardShimmer from '../../Shimmer/NavbarSearchShimmer';

const SearchProjects = ({ keyword,pressX }) => {
    const search = keyword;
    const [page, setPage] = useState(1);
    const limit = 4;
    const upRef = useRef(null);

    const ScrollTop = useSmoothScrollTop();
    const goTop = () => {
        setTimeout(() => {
            if (upRef.current) {
                ScrollTop(upRef.current);
            }
        }, 100);
    }
    const shouldSkip = !search || search === '';
    const { data, isFetching, isError } = useGetBlogsQuery({ search, page, limit }, { skip: shouldSkip })
    let pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 4 }
    const { totalPages, currentPage } = pagination;

    if (isError) {
        return (
            <div className='loading'>Sorry something went wrong.</div>
        )
    }

    return (
        <div ref={upRef}>
            <p className='font-semibold text-xs md:text-sm mt-6'>
                {isFetching
                    ? 'Searching...'
                    : data?.blogs?.length > 0
                        ? `News and Blogs (${data.pagination.totalBlogs})`
                        : 'No data found.'}
            </p>
            <div className=' grid grid-cols-4 gap-8 mt-7 max-2x-l:grid-cols-3 max-md:grid-cols-2 max-[480px]:grid-cols-1 h-auto'>

              {
        isFetching ? (
            [...Array(4)].map((_, index) => (
                <NavbarSearchCardShimmer key={index} />
            ))
        ) : (
            data?.blogs.map((items, index) => (
                    <div key={index}>
                        <NavbarSearchCard
                            image={items.image_url}
                            title={items.title}
                            slug={items.slug}
                            pressX={pressX}
                        />
                    </div>
                ))
        )
    }

            </div>

            {totalPages > 1 && (
                <div className='flex items-center justify-center gap-3 h-[43px] mt-16 max-md:mt-10'>
                    <button
                        className="md:w-[38px] md:h-[38px] w-[29px] h-[29px]  bg-lightblue hover:bg-Golden transition rounded-full relative cursor-pointer"
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
                    {totalPages > 1 && (
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


                    )}
                    <button
                        className="w-[29px] md:w-[38px] md:h-[38px] sm:w-[29px] sm:h-[29px] h-[29px] bg-lightblue hover:bg-Golden transition rounded-full relative rotate-180 cursor-pointer"
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
        </div>
    )
}


export default SearchProjects