import React from 'react';

const AboutUsSectionShimmer = () => {
    return (
        <div className="relative mt-20 max-md:mt-10 animate-pulse">
            <div className="w-[837px] h-[590px] max-2xl:h-[500px] max-sm:h-[400px] max-2xl:w-full relative z-10">
                <div className="w-full h-full bg-gray-300 rounded-md"></div>
            </div>
            <div className="w-[541px] max-1md:w-full h-auto drop-shadow-lg bg-white max-[691px]:top-full absolute z-20 right-0 top-1/2 -translate-y-1/2 p-6">
                {/* Title shimmer */}
                <div className="h-6 w-40 bg-gray-300 mb-4 rounded max-md:h-5 max-md:w-32 max-sm:h-4 max-sm:w-28"></div>

                {/* Paragraph shimmer */}
                <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-gray-300 rounded max-md:h-3"></div>
                    <div className="h-4 w-5/6 bg-gray-300 rounded max-md:h-3"></div>
                </div>

                {/* Two column stats shimmer */}
                <div className="flex justify-between mb-4">
                    <div className="border-r-2 border-gray-300 w-1/2 pr-2 space-y-2">
                        <div className="h-5 w-24 bg-gray-300 rounded max-md:h-4"></div>
                        <div className="h-4 w-32 bg-gray-300 rounded max-md:h-3"></div>
                    </div>
                    <div className="w-1/2 text-end space-y-2">
                        <div className="h-5 w-28 bg-gray-300 rounded max-md:h-4"></div>
                        <div className="h-4 w-24 bg-gray-300 rounded max-md:h-3"></div>
                    </div>
                </div>

                {/* Button shimmer */}
                <div className="h-10 w-32 bg-gray-300 rounded max-md:h-8 max-md:w-28 max-sm:h-7 max-sm:w-24"></div>
            </div>
        </div>
    );
};

export default AboutUsSectionShimmer;
