import React from 'react'
import TeamCard from '../../components/card/TeamCard'
import TeamCardShimmer from '../../components/Shimmer/TeamShimmer'

const AboutTeam = ({ members, isFetching, isError }) => {
    return (
        <section className='w-full'>
            <h1 className='font-bold text-[22px] max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px] text-center mb-10'>Our Team</h1>
            <div className='grid grid-cols-3 max-2xl-1l:grid-cols-2  max-0m-d:grid-cols-1 w-full gap-6'>
                {
                    isFetching ? (
                        [...Array(3)].map((_, index) => {
                            return (
                                < div key={index}>
                                    <TeamCardShimmer />
                                </div>
                            )
                        })
                    ) :
                        isError ? (
                            <p className='loading mt-2'>Error getting teams. Please try again later...</p>
                        ) : members?.length == 0 ? (

                            <p className='loading text-center mt-2'>No data available for our team</p>
                        ) : (
                            members?.map((item, index) => (
                                <TeamCard key={index}
                                    salute={item.salutation}
                                    name={item.name}
                                    designation={item.designation}
                                    image={item.photoUrl}

                                />
                            ))
                        )}
            </div>
        </section >
    )
}

export default AboutTeam