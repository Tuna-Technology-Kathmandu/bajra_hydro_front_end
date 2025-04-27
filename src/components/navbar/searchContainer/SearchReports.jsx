import React, { useRef, useState } from 'react'
import { useGetReportsQuery } from '../../../services/Reports'
import useSmoothScrollTop from '../../../customHook/useSmoothScrollTop';
import { ReactComponent as Triangle } from '../../../assets/svg/triangle.svg';
import ReactPaginate from 'react-paginate';
import NavbarReportShimmer from '../../Shimmer/NavbarReportShimmer';

const SearchReports = ({ keyword }) => {
    const search = keyword;
    const [page, setPage] = useState(1);
    const limit = 3;
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

    const { data, isFetching, isError } = useGetReportsQuery(
        { search },
        { skip: shouldSkip }
    );
    let pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 4 }
    const { totalPages, currentPage } = pagination;

    const handleCardClick = (fileUrl) => {
        window.open(fileUrl, '_blank'); // Open PDF in a new tab
    };

    if (isError) {
        return (
            <div className='loading'>Sorry something went wrong.</div>
        )
    }


    return (
        <div>
            <p className='font-semibold text-xs md:text-sm mt-11'>
                {isFetching
                    ? 'Searching...'
                    : data?.reports?.length > 0
                        ? `Reports (${data.reports.length})`
                        : 'No reports found.'}
            </p>
            <div className="grid max-[480px]:grid-cols-1 max-md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                {
                    isFetching ? (
                        [...Array(3)].map((_, i) => (
                            <NavbarReportShimmer key={i} />
                        ))
                    ) : (
                        data?.reports?.length > 0 ? (
                            data.reports.map((report, index) => (
                                <div
                                    onClick={() => handleCardClick(report.file)}
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-white/10 cursor-pointer hover:bg-white/20 transition-all"
                                >
                                    <h3 className="font-semibold text-base max-md:text-sm max-[531px]:text-xs text-white mb-1">
                                        {report.title}
                                    </h3>
                                    <p className="md:text-xs text-[9px] text-gray-300 line-clamp-2">
                                        {report.description?.slice(0, 46) + '...' || 'No description provided.'}
                                    </p>
                                </div>
                            ))
                        ) : null
                    )
                }
            </div>

            {data?.reports?.length > limit && totalPages > 1 && (
                <div className='flex items-center justify-center gap-3 h-[43px] mt-16 max-md:mt-10'>
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
        </div>
    )

}

export default SearchReports