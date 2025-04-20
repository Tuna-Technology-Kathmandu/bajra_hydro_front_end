import React from 'react';

const ReportCardShimmer = () => {
    return (
        <div className='h-[213px] max-md:h-[180px] max-sm:h-[140px] w-full flex justify-center shadow-lg rounded-[10px] overflow-hidden animate-pulse'>
            {/* Left PDF placeholder */}
            <div className='w-1/3 bg-lightblue flex justify-center items-center'>
                <div className='w-[80px] h-[100px] bg-white rounded-md'></div>
            </div>

            {/* Right content */}
            <div className='w-2/3 p-3 flex flex-col justify-center relative gap-2'>
                <div className='h-3 w-1/2 bg-gray-300 rounded'></div>
                <div className='h-5 w-4/5 bg-gray-300 rounded'></div>
                <div className='h-3 w-full bg-gray-300 rounded mt-2'></div>
                <div className='w-[20px] h-[20px] bg-gray-300 rounded-full absolute right-3 top-3'></div>
            </div>
        </div>
    );
};

export default ReportCardShimmer;
