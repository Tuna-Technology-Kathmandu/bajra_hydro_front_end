import React from 'react'
import { Benefits } from '../../localData/careers/Benefits'

const BenefitIndex = () => {
    return (
        <section className='p-[65px] max-md:p-[30px]'>
            <h1 className='text-center font-bold text-[22px] max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px]'>
                Your Benefit at Bajra
            </h1>
            <div className='grid grid-cols-4 max-md:grid-cols-3 max-m-d:grid-cols-2 max-xs:grid-cols-1 gap-7 max-xl:gap-4 max-1md:gap-2 mt-12'>
                {Benefits.map((items, index) => {
                    return (
                        <div key={index} className='text-center w-full border-[0.7px] border-[#2323234D] 
                        shadow-md pb-6 rounded-[5px] overflow-hidden'>
                            <div>
                                <img src={items.img} alt={items.text} />
                            </div>
                            <h1 className='font-semibold text-base max-2x-l:text-xs max-1md:text-[10px]'>{items.text}</h1>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default BenefitIndex