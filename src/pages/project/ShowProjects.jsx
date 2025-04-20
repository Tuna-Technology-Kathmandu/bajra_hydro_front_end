import React, { useRef, useState } from 'react'
import ProjectCard from '../../components/card/ProjectCard'
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg';
import useSmoothScrollTop from '../../customHook/useSmoothScrollTop';
import { useGetBlogsQuery } from '../../services/Blogs'
import ProjectCardShimmer from '../../components/Shimmer/ProjectCardShimmer';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';

const ShowProjects = () => {
    const [page, setPage] = useState(1);
    const limit = 9;
    const category = 'Projects'
    const upRef = useRef(null);

    const { data, isFetching, isError, error } = useGetBlogsQuery({ page, limit, category })
    let pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 6 }
    const { totalPages, currentPage } = pagination;

    const ScrollTop = useSmoothScrollTop();
    const goTop = () => {
        setTimeout(() => {
            if (upRef.current) {
                ScrollTop(upRef.current);
            }
        }, 100);
    }
    const onPageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            ref={upRef}
            className='p-[65px] max-md:p-[30px]'
        >
            <div className=' '>
                {isFetching && (
                    <div className='grid grid-cols-3 gap-8 mt-20 max-2x-l:grid-cols-2 max-[658px]:grid-cols-1 h-auto'>
                        {
                            [...Array(3)].map((_, i) => <ProjectCardShimmer key={i} />)
                        }
                    </div>
                )}
                {isError && (
                    <div className="col-span-full text-center loading">
                        <p>Sorry, we cannot get projects at the moment...</p>

                    </div>
                )}
                {!isFetching && !isError && data?.blogs?.length === 0 && (
                    <div className="col-span-full text-center loading">
                        <p>No Projects available at the moment...</p>
                    </div>
                )}

                {!isFetching && !isError && data?.blogs?.length > 0 &&
                    (
                        <div className='grid grid-cols-3 gap-6 mt-20 max-2x-l:grid-cols-2 max-[658px]:grid-cols-1' >
                            {
                                data.blogs.map((item, index) => {
                                    const {
                                        title = "Untitled",
                                        slug = "",
                                        id,
                                        content = "No content available",
                                        image_url = "",
                                    } = item;

                                    return (
                                        <div key={id ?? index}>
                                            <ProjectCard
                                                title={title}
                                                content={content}
                                                image={image_url}
                                                slug={slug}
                                            />
                                        </div>
                                    );
                                })}

                        </div>
                    )}
            </div>
            <div className='flex items-center justify-center gap-3 h-[43px] mt-16'>
                <button
                    className="md:w-[38px] md:h-[38px] w-[29px] h-[29px] bg-lightblue hover:bg-Golden transition rounded-full relative cursor-pointer"
                    onClick={() => {
                        setPage(currentPage - 1)
                        goTop()
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
                    className="md:w-[38px] md:h-[38px] w-[29px] h-[29px] bg-lightblue hover:bg-Golden transition rounded-full relative rotate-180 cursor-pointer"
                    onClick={() => {
                        goTop()
                        setPage(currentPage + 1)
                    }}
                    disabled={currentPage === totalPages}
                >
                    <Triangle className="w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                </button>
            </div>
        </motion.section>
    )
}

export default ShowProjects;