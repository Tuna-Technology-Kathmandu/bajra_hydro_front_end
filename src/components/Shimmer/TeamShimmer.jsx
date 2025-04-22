import React from 'react';

const TeamCardShimmer = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-10 max-md:gap-7 border-[0.7px] border-[#2323234D] rounded-[5px] p-7 max-2xl:py-3 animate-pulse'>
            <div className='h-[176px] w-[176px] max-2xl:w-[140px] max-2xl:h-[140px] max-md:w-[120px] max-md:h-[120px] rounded-full bg-gray-300'></div>
            <div className='text-center w-full'>
                <div className='h-4 max-md:h-3 bg-gray-300 rounded w-[60%] mx-auto mb-3 max-md:mb-2'></div>
                <div className='h-3 max-md:h-[10px] bg-gray-300 rounded w-[40%] mx-auto'></div>
            </div>
        </div>
    );
};

export default TeamCardShimmer;
