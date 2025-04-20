import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetSingleBlogQuery } from '../../../services/SingleBlog';
import { ReactComponent as Logo } from '../../../assets/svg/bajra-logo.svg'

const NewsSinglePage = () => {
    const { slug } = useParams();

    const { data, isError, isFetching } = useGetSingleBlogQuery(slug);

    if (isFetching) {
        return (
            <main className='w-full h-screen grid place-items-center'>
                <div>
                    <Logo className='w-20 h-20 animate-pulse' />
                </div>
            </main>
        )
    }
    if (isError) {
        return (
            <main className='w-full h-screen grid place-items-center'>
                <div>
                    <h1 className='loading'>Unable to load data. Please try again later.</h1>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen px-[65px] py-[160px] text-black">
            <article className="mt-20 max-0md:mt-10 max-1md:mt-0">
                <div className='w-full px-[100px] max-0md:px-[0px]'>
                    <p className="font-medium text-sm max-1xl:text-[13px] max-1md:text-xs text-black/80 ">
                        {new Date(data?.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>

                    <h1 className="font-bold text-[38px] max-1xl:text-[28px] max-md:text-[26px] leading-[44px] max-md:leading-[34px] mt-7 max-1xl:mt-5 max-md:mt-3  ">
                        {data?.title ?? 'Title coming soon'}
                    </h1>
                    <p className="font-medium text-sm max-1xl:text-[13px] max-1md:text-xs text-black/80 mt-5 ">
                        {data?.author?.fullname ?? 'Author coming soon'}
                    </p>
                </div>
                <div className="w-full h-[456px] max-1xl:h-[380px] overflow-hidden my-12 max-1xl:my-8 max-md:my-5">
                    {data?.image_url ? (
                        <img
                            src={data?.image_url}
                            alt={data?.title.slice(0, 50)}
                            className="object-cover w-full h-full "
                        />
                    ) : (

                        <p className="text-sm max-1xl:text-[13px]  max-1md:text-xs text-gray-500">No Image Available</p>

                    )}
                </div>
                <div dangerouslySetInnerHTML={{ __html: data?.content ?? 'Content coming soon' }} className="mt-7  max-1xl:mt-5 max-md:mt-3 font-medium text-base 
                leading-[30px] max-1xl:leading-[27px] max-1xl:text-sm px-[100px] max-0md:px-[0px] " />
            </article>

            {/* blogs here
            {
                getCategoryId !== null && (
                    <RelatedBlogs getCategoryId={getCategoryId} getCurrentId={getCurrentId} />
                )
            } */}
            {/* related blogs here */}

        </main>
    )
}

export default NewsSinglePage