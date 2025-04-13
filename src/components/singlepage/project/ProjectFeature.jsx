import React from 'react'

const ProjectFeature = () => {
    return (
        <section className='mt-[80px]'>
            <h1 className='font-bold text-center text-[22px] max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px]'>
                Project Access
            </h1>
            <div className='w-full h-auto mt-14 font-medium text-sm'>
                <div className='p-7 flex gap-16 odd:bg-[#48CAE41A]'>
                    <p className='w-1/4 max-0md:text-xs'>Capacity </p>
                    <p className='max-0md:text-xs'>216 MW (72 × 3 units)</p>
                </div>
                <div className='p-7 flex gap-16 odd:bg-[#48CAE41A]'>
                    <p className='w-1/4 max-0md:text-xs'>Annual Energy</p>
                    <p className='max-0md:text-xs'>216 MW (72 × 3 units)</p>
                </div>
                <div className='p-7 flex gap-16 odd:bg-[#48CAE41A]'>
                    <p className='w-1/4 max-0md:text-xs'>Annual Energy</p>
                    <p className='max-0md:text-xs'>216 MW (72 × 3 units)</p>
                </div>
            </div>
        </section>
    )
}

export default ProjectFeature