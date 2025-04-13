import React from 'react';
import image from '../../assets/images/hydro3.webp';

const TeamCard = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-10 max-md:gap-7 border-[0.7px] border-[#2323234D] rounded-[5px] p-7 max-2xl:py-3'>
            <div className='h-[176px] w-[176px] max-2xl:w-[140px] max-2xl:h-[140px] max-md:w-[120px] max-md:h-[120px] rounded-full overflow-hidden'>
                <img src={image} className='w-full h-full object-cover hover:scale-110 transition-all'></img>
            </div>
            <div className='text-center'>
                <h1 className='font-bold text-base mb-3 max-md:mb-2 max-md:text-sm'>Mr. UN Shrestha</h1>
                <p className='font-semibold text-xs max-md:text-[10px]'>Chairman</p>
            </div>
        </div>
    )
}

export default TeamCard