import React, { useState } from 'react';
import { ReactComponent as Drop } from '../../../assets/svg/dropDown.svg';
import { ReactComponent as Search } from '../../../assets/svg/newSearch.svg';
import JobsList from './JobsList';
import DropDown from './DropDown';
import GoogleMapIframe from '../../../components/map/GoogleMap';
import { useGetJobsQuery } from '../../../services/Jobs';

const JobsIndex = () => {
    const lists = ['one', 'two', 'three'];
    const [search, setSearch] = useState('')
    const [showCategory, setShowCategory] = useState(false);
    const [showLevel, setShowLevel] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const reset = () => {
        setSelectedCategory('');
        setSelectedLevel('');
        setSelectedLocation('');
        setSearch('');
    }

    const { data } = useGetJobsQuery();
    let jobs = data?.jobs ?? [];

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

                            <DropDown lists={lists}
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

                            <DropDown lists={lists}
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
                            selectedLocation ? selectedLocation : 'Location'
                        }</p>
                        <Drop />
                    </button>
                    {
                        showLocation && (

                            <DropDown lists={lists}
                                setShowDrop={setShowLocation}
                                setSelectedField={setSelectedLocation}
                            />
                        )


                    }
                </div>

                {/* Search Field */}
                <div className="relative w-full">
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 transform">
                        <Search className="w-3 h-3 sm:w-4 sm:h-4 fill-[#000000B2]" />
                    </span>
                    <input
                        type="text"
                        className="w-full h-[45px] md:h-[60px] pl-9 pr-4 border border-[#00000026] rounded-[8px] 
                                   text-xs md:text-base placeholder:text-xs outline-none focus:border focus:border-lightblue"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            {/* Job Count */}
            <p className='font-semibold text-sm sm:text-base mt-8 underline pl-1 sm:pl-3'>{data?.jobs?.length   ?? 0}</p>
            {/* Map */}
            <div className="my-6">
                {/* pass the props when necessary in the future after the api is */}
                <GoogleMapIframe />
            </div>
            {/*List */}

            <JobsList jobs={jobs} />
        </section>
    )
}

export default JobsIndex;
