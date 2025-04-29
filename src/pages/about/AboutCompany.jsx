import React from 'react';

const AboutCompany = ({ title, description, isFetching, isError,image }) => {

    return (
        <section className='w-full'>
            <h1 className='font-bold text-[22px] max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px]'>{title}</h1>
            {
                isFetching ? (
                    <div className="space-y-4 mt-4">
                        <div className="h-2 w-full bg-gray-200 rounded"></div>
                        <div className="h-2 w-11/12 bg-gray-200 rounded"></div>
                        <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                        <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                        <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                    </div>
                ) : isError ? (
                    <p className='loading mt-2'>Error Getting Company Information</p>
                ) : (
                    <>
                        <img
                            src={image}
                            alt='vision nepal limited'
                            className='mt-4 w-full h-[400px] max-md:h-[300px] '
                        >
                        </img>
                        <p dangerouslySetInnerHTML={{ __html: description }} className='font-normal text-sm max-2xl:text-[13px] max-sm:text-[11px] leading-[32px] max-2xl:leading-[28px] max-sm:leading-[19px] mt-7 max-md:mt-5 max-sm:mt-3'>

                        </p>
                    </>

                )
            }
        </section>
    );
};

export default AboutCompany;
