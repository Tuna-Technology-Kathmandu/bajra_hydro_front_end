import React from 'react'

const ProjectAccess = () => {
    return (
        <div className='text-center mt-[70px] max-0md:min-h-96'>
            <h1 className='font-bold text-[22px] max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px]'>
                Project Access
            </h1>
            <div className='w-full h-[656px] max-0md:h-auto mt-[65px] relative max-0md:static max-0md:mb-10 '>
                {/* main image map */}
                <div className='w-full h-full'>
                    <img src="https://dummyimage.com/600x300/ddd/333&text=News+Preview" alt="project"
                        className='w-full h-full max-0md:h-[400px]'
                    />
                </div>
                <div className='max-0md:mt-2 max-0md:flex max-0md:h-auto max-0md:w-full max-0md:gap-2 max-0md:flex-wrap max-m-d:flex-col max-0md:justify-center bg-red-400'>
                    {/* image 1 */}
                    <div className='w-1/4 max-0md:w-1/3 max-m-d:w-full h-[200px] max-md:h-[150px] absolute max-0md:static top-0 left-0 border border-amber-300'>
                        <img src="https://dummyimage.com/600x300/ddd/333&text=News+Preview" alt="project"
                            className='w-full h-full'
                        />
                    </div>
                    <div className='w-1/4  max-0md:w-1/3 max-m-d:w-full h-[200px] max-md:h-[150px] absolute max-0md:static top-0 left-[25%] border border-amber-300'>
                        <img src="https://dummyimage.com/600x300/ddd/333&text=News+Preview" alt="project"
                            className='w-full h-full'
                        />
                    </div>
                    <div className='w-1/4  max-0md:w-1/3 max-m-d:w-full h-[200px] max-md:h-[150px] absolute max-0md:static top-0 left-[50%] border border-amber-300'>
                        <img src="https://dummyimage.com/600x300/ddd/333&text=News+Preview" alt="project"
                            className='w-full h-full'
                        />
                    </div>
                    <div className='w-1/4  max-0md:w-1/3 max-m-d:w-full h-[200px] max-md:h-[150px] absolute max-0md:static top-0 left-[75%] border border-amber-300'>
                        <img src="https://dummyimage.com/600x300/ddd/333&text=News+Preview" alt="project"
                            className='w-full h-full'
                        />
                    </div>
                    <div className='w-1/4  max-0md:w-1/3 max-m-d:w-full h-[200px] max-md:h-[150px] absolute max-0md:static top-[32%] max-md:top-[150px] right-0 border border-amber-300'>
                        <img src="https://dummyimage.com/600x300/ddd/333&text=News+Preview" alt="project"
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectAccess