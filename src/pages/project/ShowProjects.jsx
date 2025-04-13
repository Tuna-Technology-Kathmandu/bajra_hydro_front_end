import React, { useRef, useState } from 'react'
import ProjectCard from '../../components/card/ProjectCard'
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg';
import useSmoothScrollTop from '../../customHook/useSmoothScrollTop';
import { motion } from 'framer-motion';

const ShowProjects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5);
    const upRef = useRef(null);

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
            <div className=' grid grid-cols-3 gap-8 mt-20 max-2x-l:grid-cols-2 max-[658px]:grid-cols-1 h-auto'>
                {
                    [...Array(9)].map((_, index) => {
                        return (
                            <div key={index}>
                                <ProjectCard />
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex items-center justify-center gap-3 h-[43px] mt-16'>
                <button
                    className="md:w-[38px] md:h-[38px] w-[29px] h-[29px] bg-lightblue hover:bg-Golden transition rounded-full relative cursor-pointer"
                    onClick={() => {
                        onPageChange(currentPage - 1)
                        goTop()
                    }
                    }
                    disabled={currentPage === 1}

                >
                    <Triangle className="w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                </button>

                <button
                    className="md:w-[38px] md:h-[38px] w-[29px] h-[29px] bg-lightblue hover:bg-Golden transition rounded-full relative rotate-180 cursor-pointer"
                    onClick={() => {
                        goTop()
                        onPageChange(currentPage + 1)
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