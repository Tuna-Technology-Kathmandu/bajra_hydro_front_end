import React, { useEffect, useState } from 'react';
import { ReactComponent as Drop } from '../../../assets/svg/dropDown.svg';
import { ReactComponent as Search } from '../../../assets/svg/newSearch.svg';
import JobsList from './JobsList';
import DropDown from './DropDown';
import GoogleMapIframe from '../../../components/map/GoogleMap';
import { useGetJobsQuery } from '../../../services/Jobs';
import { useGetCategoryQuery } from '../../../services/Category';
import { useRef } from 'react';
import ReactPaginate from 'react-paginate';
import { ReactComponent as Triangle } from '../../../assets/svg/triangle.svg'

const JobsIndex = () => {
    const jobTypeList = ["Full-time", "Part-time", "Contract", "Temporary", "Internship"]
    const careerLevelList = ["Entry-Level", "Mid-Level", "Senior-Level", "Manager", "Executive"]
    const [searchParam, setSearchParam] = useState('');
    const [searchTrigger, setSearchTrigger] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const [showLevel, setShowLevel] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedJobType, setSelectedJobType] = useState('');
    const [submittedSearch, setSubmittedSearch] = useState('');
    const [page, setPage] = useState(1);
    const limit = 5;

    const upRef = useRef(null);

    const goTop = () => {
        if (upRef.current) {
            const y = upRef.current.getBoundingClientRect().top + window.scrollY - 150; // Adjust offset as needed
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    const handleSearch = () => {
        setSelectedCategory('');
        setSelectedLevel('');
        setSelectedJobType('');
        setSubmittedSearch(searchParam.trim());
    };

    const reset = () => {
        setSelectedCategory('');
        setSelectedLevel('');
        setSelectedJobType('');
        setSearchParam('');
        setSearchTrigger(false);
    }
    const search = 'jobs';
    const { data: category } = useGetCategoryQuery({ search })
    const categoryLists = category?.categories?.[0]?.subcategories?.map(sub => sub.name) || [];

    const { data, isFetching, isLoading } = useGetJobsQuery({

        category: selectedCategory,
        level: selectedLevel,
        job_type: selectedJobType,
        search: submittedSearch,// no need for searchTrigger
        page,
        limit


    });
    let pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 5 }
    const { totalPages, currentPage } = pagination;
    const jobs = data?.jobs || [];

    // useEffect(() => {
    //     if (searchParam !== '') {
    //         setSelectedCategory('')
    //         setSelectedJobType('')
    //         setSelectedLevel('')
    //     }
    // }, [searchParam])

    return (
        <section className='!mt-20'>

            <GoogleMapIframe />

            <div className='w-full flex justify-between items-center max-sm:flex-col max-md:mt-10 '
                ref={upRef}
            >
                {/* headwer */}
                <h1 className='font-bold text-lg sm:text-xl mb-6 max-sm:mb-3'>Jobs available</h1>


                <p className='font-semibold text-xs md:text-base max-sm:mb-3 cursor-pointer hover:text-lightblue transition-all duration-300'
                    onClick={reset}
                >Reset</p>
            </div>

            {/* Filter Fields */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                {/* Job Category */}
                <div className='relative w-full'>
                    <button
                        onClick={
                            () => {
                                setShowCategory(!showCategory);
                                setShowLevel(false);
                                setShowLocation(false);
                                setSearchParam('')
                            }
                        }
                        className='w-full px-5 h-[45px] cursor-pointer md:h-[60px] border border-[#00000026] rounded-[8px] flex justify-between items-center'>
                        <p className='font-semibold text-xs md:text-base text-black/50'>

                            {
                                selectedCategory ? selectedCategory : 'Job Category'
                            }
                        </p>
                        <Drop />
                    </button>
                    {
                        showCategory && (

                            <DropDown lists={categoryLists}
                                setShowDrop={setShowCategory}
                                setSelectedField={setSelectedCategory}
                                setSubmittedSearch={setSubmittedSearch}
                            />
                        )


                    }
                </div>

                {/* career level */}
                <div className='relative w-full'>
                    <button
                        onClick={
                            () => {
                                setShowLevel(!showLevel);
                                setShowCategory(false);
                                setShowLocation(false);
                                setSearchParam('')
                            }
                        }
                        className='w-full px-5 h-[45px] cursor-pointer md:h-[60px] border border-[#00000026] rounded-[8px] flex justify-between items-center'>
                        <p className='font-semibold text-xs md:text-base text-black/50'>
                            {
                                selectedLevel ? selectedLevel : 'Career Level'
                            }
                        </p>
                        <Drop />
                    </button>
                    {
                        showLevel && (

                            <DropDown lists={careerLevelList}
                                setShowDrop={setShowLevel}
                                setSelectedField={setSelectedLevel}
                                setSubmittedSearch={setSubmittedSearch}
                            />
                        )


                    }
                </div>

                {/* Location */}
                <div className='relative w-full'>
                    <button
                        onClick={
                            () => {
                                setShowLocation(!showLocation);
                                setShowCategory(false);
                                setShowLevel(false);
                                setSearchParam('');

                            }
                        }
                        className='w-full px-5 h-[45px] cursor-pointer md:h-[60px] border border-[#00000026] rounded-[8px] flex justify-between items-center'>
                        <p className='font-semibold text-xs md:text-base text-black/50'>{
                            selectedJobType ? selectedJobType : 'Job Type'
                        }</p>
                        <Drop />
                    </button>
                    {
                        showLocation && (

                            <DropDown lists={jobTypeList}
                                setShowDrop={setShowLocation}
                                setSelectedField={setSelectedJobType}
                                setSubmittedSearch={setSubmittedSearch}

                            />
                        )
                    }
                </div>

                {/* Search Field */}
                <div className="relative w-full">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 transform hover:scale-110 transition-all duration-300 cursor-pointer"
                        onClick={handleSearch}
                    >
                        <Search className="w-3 h-3 sm:w-4 sm:h-4 fill-[#000000B2]" />
                    </span>
                    <form >
                        <input
                            type="text"
                            className="w-full h-[45px] md:h-[60px] pl-9 pr-4 border border-[#00000026] rounded-[8px] 
                                   text-xs md:text-base placeholder:text-xs outline-none focus:border focus:border-lightblue"
                            placeholder="Search"
                            value={searchParam}
                            onChange={(e) => {
                                setSearchParam(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                    e.preventDefault();
                                    e.target.blur();
                                }
                            }}
                        />
                    </form>
                </div>
            </div>

            {/* Job Count */}
            <p className='font-semibold text-sm sm:text-base mt-8 underline pl-1 sm:pl-3'>{jobs.length ?? 0}</p>
            {/* Map */}

            {/*List */}

            <div>
                {
                    (isLoading || isFetching) ? (
                        <div className='min-h-[100px] grid place-items-center'>
                            <p className='loading text-center'>Searching for a job...</p>
                        </div>
                    ) : jobs.length === 0 ? (
                        <div className='min-h-[100px] grid place-items-center'>
                            <p className='loading text-center'>No job found...</p>
                        </div>
                    ) : (

                        <JobsList jobs={jobs} />
                    )
                }
            </div>

            {
                totalPages > 1 && (
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
                )
            }

        </section>
    )
}

export default JobsIndex;