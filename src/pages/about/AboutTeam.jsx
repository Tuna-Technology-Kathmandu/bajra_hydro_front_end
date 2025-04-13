import React from 'react'
import TeamCard from '../../components/card/TeamCard'

const AboutTeam = () => {
    return (
        <section className='w-full'>
            <h1 className='font-bold text-[22px] text-center mb-10'>our Team</h1>
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

export default AboutTeam