import React, { useRef, useState } from 'react'
import ReportCard from '../../components/card/ReportCard'
import { useGetReportsQuery } from '../../services/Reports'
import useSmoothScrollTop from '../../customHook/useSmoothScrollTop';
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg';
import ReactPaginate from 'react-paginate';
import ReportCardShimmer from '../../components/Shimmer/ReportCardShimmer';

const ReportContainer = () => {
    const limit = 2;
    const [page, setPage] = useState(1);
    const upRef = useRef(null);

    const ScrollTop = useSmoothScrollTop();
    const goTop = () => {
        setTimeout(() => {
            if (upRef.current) {
                ScrollTop(upRef.current);
            }
        }, 100);
    }
    const { data, isFetching, isError } = useGetReportsQuery({ page, limit })
    let pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 6 }
    const { totalPages, currentPage } = pagination;

    return (
        <section className='p-[75px] max-md:p-[30px]'
            ref={upRef}
        >
            <div className=' grid grid-cols-2 max-[706px]:grid-cols-1 w-full gap-14 max-sm:gap-8'>


                {isFetching && (

                    [...Array(2)].map((_, i) => <ReportCardShimmer key={i} />)

                )}
                {isError && (
                    <div className="col-span-full text-center loading">
                        <p>Sorry, we cannot get blogs at the moment...</p>
                    </div>
                )}
                {!isFetching && !isError && data?.reports?.length === 0 && (
                    <div className="col-span-full text-center loading">
                        <p>No Blogs available at the moment...</p>
                    </div>
                )}
                {!isFetching && !isError && data?.reports?.length > 0 && (
                    <>
                        {data.reports.map((item, index) => {
                            const {
                                title = "Untitled",
                                file = "",
                                id,
                                description = "No content available",
                                fiscalYear = "",
                                createdAt = new Date().toISOString(),
                                quarter = "",
                                status = ""
                            } = item;

                            return (
                                <div key={id ?? index}>
                                    <ReportCard
                                        title={title}
                                        description={description}
                                        file={file}
                                        date={createdAt}
                                        fiscalYear={fiscalYear}
                                        quarter={quarter}
                                        status={status}
                                    />
                                </div>
                            );
                        })}
                    </>
                )}

            </div>
            <div className='flex items-center justify-center gap-3 h-[43px] mt-16'>
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
        </section>
    )
}

export default ReportContainer