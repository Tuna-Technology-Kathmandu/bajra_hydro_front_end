import React from 'react'
import NewsCard from '../../components/card/NewsCard'

const ShowNews = () => {
    return (
        <section className='p-[65px] max-md:p-[30px] grid grid-cols-3 gap-6 mt-20 max-2x-l:grid-cols-2 max-[658px]:grid-cols-1 h-auto'>
            {
                [...Array(9)].map((_, index) => {
                    return (
                        <div key={index}>
                            <NewsCard />
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ShowNews;