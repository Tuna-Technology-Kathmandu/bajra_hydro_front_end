import React, { useEffect, useState } from 'react';
import { ReactComponent as Drop } from '../../../assets/svg/dropDown.svg';
import { ReactComponent as Search } from '../../../assets/svg/newSearch.svg';
import JobsList from './JobsList';
import DropDown from './DropDown';
import GoogleMapIframe from '../../../components/map/GoogleMap';
import { useGetJobsQuery } from '../../../services/Jobs';
import { useGetCategoryQuery } from '../../../services/Category';
import { useMemo } from 'react';

const JobsIndex = () => {
    const jobTypeList = ['Full-Time', 'Part-Time'];
    const careerLevelList = ['Internship', 'Junior', 'Mid-Level', 'Senior', 'Executive']
    const [searchParam, setSearchParam] = useState('');
    const [searchTrigger, setSearchTrigger] = useState('');
    const [showCategory, setShowCategory] = useState(false);
    const [showLevel, setShowLevel] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedJobType, setSelectedJobType] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);

    const handleSearch = (event) => {
        setSearchParam(event.target.value)
    }

    const reset = () => {
        setSelectedCategory('');
        setSelectedLevel('');
        setSelectedJobType('');
        setSearchParam('');
    }
    const search = 'jobs';
    const { data: category } = useGetCategoryQuery({ search })
    const categoryLists = category?.categories?.[0]?.subcategories?.map(sub => sub.name) || [];

    const { data } = useGetJobsQuery();
    const jobs = useMemo(() => data?.jobs ?? [], [data]);

    useEffect(() => {
        const filtered = jobs.filter(job => {
            const matchesCategory = selectedCategory
                ? job.category?.name === selectedCategory
                : true;

            const matchesJobType = selectedJobType
                ? job.job_type === selectedJobType
                : true;

            const matchesLevel = selectedLevel
                ? job.level === selectedLevel
                : true;

            const matchesSearch = searchParam
                ? [
                    job.title,
                    job.category?.name,
                    job.level,
                    job.job_type,
                    job.location,
                    job.description
                ].some(field =>
                    field?.toLowerCase().includes(searchTrigger.toLowerCase())
                )
                : true;

            return matchesCategory && matchesJobType && matchesLevel && matchesSearch;
        });

        setFilteredJobs(filtered); // Update filtered jobs
    }, [selectedCategory, selectedLevel, selectedJobType, searchParam, jobs]); // Dependencies: run filter when any of these change

    return (
        <section className='mt-14 px-[65px] max-md:p-[30px]'>


            <div className='w-full flex justify-between items-center max-sm:flex-col '>
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
                            />
                        )


                    }
                </div>

                {/* Search Field */}
                <div className="relative w-full">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 transform"
                        onClick={() => setSearchTrigger(searchParam)}
                    >
                        <Search className="w-3 h-3 sm:w-4 sm:h-4 fill-[#000000B2]" />
                    </span>
                    <input
                        type="text"
                        className="w-full h-[45px] md:h-[60px] pl-9 pr-4 border border-[#00000026] rounded-[8px] 
                                   text-xs md:text-base placeholder:text-xs outline-none focus:border focus:border-lightblue"
                        placeholder="Search"
                        value={searchParam}
                        onChange={(e) => setSearchParam(e.target.value)}
                    />
                </div>
            </div>

            {/* Job Count */}
            <p className='font-semibold text-sm sm:text-base mt-8 underline pl-1 sm:pl-3'>{filteredJobs?.length ?? 0}</p>
            {/* Map */}
            {/* <div className="my-6">
             
                <GoogleMapIframe />
            </div> */}
            {/*List */}

            <JobsList jobs={filteredJobs} />
        </section>
    )
}

export default JobsIndex;
