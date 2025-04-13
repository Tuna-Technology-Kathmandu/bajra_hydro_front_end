import React from 'react'

const ProjectLocation = () => {
    return (
        <div className='text-center mt-[70px] max-0md:mb-72'>
            <h1 className='font-bold text-[22px] max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px]'>
                Project Location
            </h1>
            <div className='w-full h-[456px] max-md:h-[300px] mt-[65px] relative'>
                <div className='w-full h-full'>
                    <img src="https://dummyimage.com/600x300/ddd/333&text=News+Preview" alt="project"
                        className='w-full h-full '
                    />
                </div>
                <div className='w-1/3 max-0md:w-full h-[300px] max-md:h-[200px] absolute top-0 right-0 max-0md:top-[110%]  border border-amber-300'>
                    <img src="https://dummyimage.com/600x300/ddd/333&text=News+Preview" alt="project"
                        className='w-full h-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectLocation