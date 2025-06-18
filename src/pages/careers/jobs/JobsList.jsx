import React from 'react'

// const jobs = [
//     {
//         position: 'Commercial and Contract Manager',
//         level: 'Entry Level',
//         location: 'S. Home, 3rd Floor - G6, H.N. 161, Bagdurbar, Sundhara - 11'
//     },
//     {
//         position: 'Commercial and Contract Manager',
//         level: 'Entry Level',
//         location: 'S. Home, 3rd Floor - G6, H.N. 161, Bagdurbar, Sundhara - 11'
//     },
//     {
//         position: 'Commercial and Contract Manager',
//         level: 'Entry Level',
//         location: 'S. Home, 3rd Floor - G6, H.N. 161, Bagdurbar, Sundhara - 11'
//     },
// ]

const JobsList = ({ jobs }) => {
    return (
        <section className='w-full mt-14 px-3'>
            {/* headers (visible only on md+) */}
            <div className='hidden md:grid w-full grid-cols-[1.5fr_1fr_1fr_2fr] gap-3 mb-3'>
                <p className='font-bold text-base max-2x-l:text-sm '>Position</p>
                <p className='font-bold text-base max-2x-l:text-sm '>Career Level</p>
                <p className='font-bold text-base max-2x-l:text-sm '>Job Type</p>
                <p className='font-bold text-base max-2x-l:text-sm '>Location</p>

            </div>

            {/* job list */}
            {jobs.map((job, index) => (
                <div
                    key={index}
                    className='grid md:grid-cols-[1.5fr_1fr_1fr_2fr] grid-cols-1 gap-2 md:gap-3 p-3 mb-4 rounded-md even:bg-[#48CAE41A] bg-white shadow-sm'
                >
                    <div>
                        <p className='md:hidden text-[13px] font-semibold text-gray-500'>Position</p>
                        <p className='font-medium text-xs xl:text-sm'>{job?.category?.name ?? 'Unknown'}</p>
                    </div>
                    <div>
                        <p className='md:hidden text-[13px] font-semibold text-gray-500'>Career Level</p>
                        <p className='font-medium text-xs xl:text-sm'>{job?.level ?? 'Unknown'}</p>
                    </div>
                    <div>
                        <p className='md:hidden text-[13px] font-semibold text-gray-500'>Job-Type</p>
                        <p className='font-medium text-xs xl:text-sm'>{job?.job_type ?? 'Unknown'}</p>
                    </div>
                    <div>
                        <p className='md:hidden text-[13px] font-semibold text-gray-500'>Location</p>
                        <p className='font-medium text-xs xl:text-sm'>{job?.location ?? 'Unknown'}</p>
                    </div>

                </div>
            ))}
        </section>
    )
}

export default JobsList
