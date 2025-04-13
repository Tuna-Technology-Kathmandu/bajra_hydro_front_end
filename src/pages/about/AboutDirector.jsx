import React from 'react'
import TeamCard from '../../components/card/TeamCard'

const AboutDirector = () => {
    return (
        <section className='w-full'>
            <h1 className='font-bold text-[22px] max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px] text-center mb-10'>Board of Directors</h1>
            <div className='grid grid-cols-3 max-2xl-1l:grid-cols-2  max-0m-d:grid-cols-1 w-full gap-6'>
                {
                    [...Array(7)].map((_, index) => {
                        return (
                            < div key={index}>
                                <TeamCard />
                            </div>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default AboutDirector