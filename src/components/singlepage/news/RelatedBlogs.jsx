import React from 'react'
import NewsCard from '../../card/NewsCard';

const RelatedBlogs = () => {
    return (
        <div className='mt-32'>
            <h1 className='text-center font-bold text-[22px] max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px]'>Related News</h1>
            <div className="w-full grid grid-cols-3 gap-6 mt-20 max-2x-l:grid-cols-2 max-[658px]:grid-cols-1 h-auto">
                {
                    [...Array(3)].map((__, index) => {
                        return (
                            <div key={index}>
                                <NewsCard />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default RelatedBlogs