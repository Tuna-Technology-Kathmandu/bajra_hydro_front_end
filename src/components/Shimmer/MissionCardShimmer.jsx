import React from 'react';

const MissionCardShimmer = () => {
    return (
        <div className='shadow-xl w-full h-auto p-7 animate-pulse bg-white rounded-md'>
            <div className='h-6 w-2/3 mx-auto bg-gray-300 rounded mb-7'></div>
            <ul className='flex flex-col gap-5 w-full'>
                {[...Array(5)].map((_, index) => (
                    <li key={index} className='flex gap-4 items-start'>
                        <div className='w-[15px] h-[15px] bg-gray-300 rounded-full mt-1'></div>
                        <div className='h-4 bg-gray-300 rounded w-[85%]'></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MissionCardShimmer;
