import React from 'react'
import { ReactComponent as Tick } from '../../assets/svg/tick.svg';

const MissionCard = ({ list, title }) => {
    return (
        <div className='shadow-xl w-full h-auto p-7'>
            <p className='text-center font-bold text-[20px] mb-7 max-2xl:text-[20px] max-md:text-[17px] max-sm:text-[14px]'>{title}</p>
            <ul className='flex flex-col gap-5 w-full'>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index} className='flex gap-4 items-start'>
                                <div className='mt-1'>
                                    <Tick className='w-[15px]' />
                                </div>
                                <p className='font-medium text-[13px]  max-2xl:text-[12px] max-sm:text-[10px]'>
                                    {item.title}
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MissionCard