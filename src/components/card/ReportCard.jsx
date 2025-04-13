import React from 'react'
import { ReactComponent as Download } from '../../assets/svg/download.svg';
import { ReactComponent as PDF } from '../../assets/svg/Pdf.svg';

const ReportCard = () => {
    return (
        <div className='h-[213px] max-md:h-[180px] max-sm:h-[140px] w-full flex justify-center shadow-lg rounded-[10px] overflow-hidden
        hover:translate-x transition-transform duration-300 origin-top-left hover:scale-105
        '>
            <div className='w-1/3 bg-lightblue flex justify-center items-center'>
                <PDF className='w-[108px] h-[108px]' />
            </div>
            <div className='w-2/3 p-3 flex flex-col justify-center relative'>
                <p className='font-semibold text-xs max-1xl:text-[10px]'>March 26, 2024</p>
                <h1 className='font-bold text-[24px] max-1xl:text-[20px] max-[706px]:text-[16px]'>Report File</h1>
                <p className='font-medium text-[11px] max-1xl:text-[10px] mt-3'>Level 5 Supervisor Mechanical (Final) 2071-10-11</p>
                <div className='w-[20px] h-[20px] absolute right-3 top-3 cursor-pointer'>
                    <Download className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default ReportCard