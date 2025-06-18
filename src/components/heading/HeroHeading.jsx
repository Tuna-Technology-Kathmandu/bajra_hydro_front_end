import React from 'react'

const HeroHeading = ({ title }) => {
    return (
        <p className='font-bold text-center text-[30px] max-2x-l:text-[27px] max-md:text-[22px] max-1md:text-[18px] text-white'>
            {title}
        </p>
    )
}

export default HeroHeading