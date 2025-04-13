import React, { useRef, useState } from 'react'
import { ReactComponent as Search } from '../../assets/svg/newSearch.svg'
import { ReactComponent as Cross } from '../../assets/svg/cross.svg'
import useSmoothScrollTop from '../../customHook/useSmoothScrollTop';
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg'
import NavbarSearchCard from '../card/NavbarSearchCard';
import { AnimatePresence, motion } from 'framer-motion';


const SearchContainer = ({ setShowSearch }) => {
    const searchInputRef = useRef(null);
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
    const handleSearchRef = () => { }
    const pressX = () => {
        setShowSearch(false);
        searchInputRef.current.value = '';
    }


    return (

        <div className='h-auto bg-black/60 text-white backdrop-blur-sm p-[65px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
        >

            {/* for search input and cross */}
            <div className='w-full flex justify-between gap-5 items-center '>
                <div className='relative w-full h-full'>
                    <input type="text"
                        ref={searchInputRef}
                        placeholder='Search...'
                        className=" z-0 font-medium text-[13px] m-d:text-xs leading-[19px] tracking-[0.05em] w-full border-b-2 outline-none border-b-white bg-transparent text-white pb-1"
                    />
                    <Search className='absolute w-[20px] h-[20px] m-d:w-[15px] m-d:h-[15px] cursor-pointer right-[1%] -top-1 m-d:top-2 z-10 '
                        onClick={handleSearchRef}
                    />
                </div>
                <Cross className='w-[50px] h-[50px] m-d:w-[38px] m-d:h-[38px] cursor-pointer -right-24 -top-4 z-10 stroke-white '
                    onClick={pressX}
                />
            </div>
            <p className='font-semibold text-base mt-6'>Search Result</p>

            {/* for our search results */}
            <div
                ref={upRef}
                className=''
            >
                <div className=' grid grid-cols-4 gap-8 mt-16 max-2x-l:grid-cols-3 max-md:grid-cols-2 max-[480px]:grid-cols-1 h-auto'>
                    {
                        [...Array(6)].map((_, index) => {
                            return (
                                <div key={index}>
                                    <NavbarSearchCard />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-center gap-3 h-[43px] mt-16'>
                    <button
                        className="md:w-[38px] md:h-[38px] w-[29px] h-[29px]  bg-lightblue hover:bg-Golden transition rounded-full relative cursor-pointer"
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
                        className="w-[29px] md:w-[38px] md:h-[38px] sm:w-[29px] sm:h-[29px] h-[29px] bg-lightblue hover:bg-Golden transition rounded-full relative rotate-180 cursor-pointer"
                        onClick={() => {
                            goTop()
                            onPageChange(currentPage + 1)
                        }}
                        disabled={currentPage === totalPages}
                    >
                        <Triangle className="w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SearchContainer