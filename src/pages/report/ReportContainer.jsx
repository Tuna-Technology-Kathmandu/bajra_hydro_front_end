import React from 'react'
import ReportCard from '../../components/card/ReportCard'

const ReportContainer = () => {
    return (
        <section className='p-[75px] max-md:p-[30px] grid grid-cols-2 max-[706px]:grid-cols-1 w-full gap-14 max-sm:gap-8'>
            {
                [...Array(10)].map((_, index) => {
                    return (
                        <div key={index}>
                            <ReportCard />
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ReportContainer