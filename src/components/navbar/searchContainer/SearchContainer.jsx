import React, { useRef, useState } from 'react'
import { ReactComponent as Search } from '../../../assets/svg/search.svg'
import { ReactComponent as Cross } from '../../../assets/svg/cross.svg'
// import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg'
import SearchProjects from './SearchProjects';
import SearchReports from './SearchReports';


const SearchContainer = ({ setShowSearch }) => {
    const searchInputRef = useRef(null);
    const [search, setSearch] = useState('');
    // const [projectFetching, setProjectFetching] = useState();
    // const [reportFetching, setReportFetching] = useState()

    // const projectFetch = (bool) => {
    //     setProjectFetching(bool)
    // }
    // const reportFetch = (bool) => {
    //     setReportFetching(bool)
    // }

    // const isLoading = projectFetching || reportFetching;

    const handleSearchRef = () => {
        setSearch(searchInputRef.current.value);
    }
    const pressX = () => {
        setShowSearch(false);
        searchInputRef.current.value = '';
    }

    return (

        <div className='h-auto bg-black/60 text-white backdrop-blur-sm p-[65px] max-md:px-[30px]'>

            {/* for search input and cross */}
            <div className='w-full flex justify-between gap-5 items-center '>
                <div className='relative w-full h-full'>
                    <input type="text"
                        ref={searchInputRef}
                        placeholder='Search...'
                        className=" z-0 font-medium text-[13px] placeholder:max-md:text-xs m-d:text-xs leading-[19px] tracking-[0.05em] w-full border-b-2 outline-none border-b-white bg-transparent text-white pb-1"
                    />
                    <Search className='absolute m-d:w-[20px] m-d:h-[20px] w-[15px] h-[15px] cursor-pointer right-[1%] top-1 m-d:-top-0.5 z-10 '
                        onClick={handleSearchRef}
                    />
                </div>
                <Cross className='m-d:w-[50px] m-d:h-[50px] w-[38px] h-[38px] cursor-pointer absolute left-3 top-1  z-10 stroke-white '
                    onClick={pressX}
                />
            </div>

            {/* for our search results */}
            {/* {
                isLoading ? (
                    <div>sEARCHING</div>
                ) : (
                    <>
                        <SearchProjects keyword={search} onLoadingChange={setProjectFetching} />
                        <SearchReports keyword={search} onLoadingChange={setReportFetching} />
                    </>
                )
            } */}
            {
                search !== '' && (
                    <>
                        <SearchProjects keyword={search} />
                        <SearchReports keyword={search} />
                    </>
                )
            }
        </div >
    )
}

export default SearchContainer