const NewsCardShimmer = () => {
    return (
        <div className="w-full h-auto animate-pulse">
            <div className=''>
                <div className="bg-gray-300 h-[260px] max-md:h-[200px] w-full rounded-sm"></div>
                <div className="relative -mt-11 w-[95%] min-h-[200px] n1:min-h-[250px] p-5 max-md:p-3 bg-white shadow-lg rounded-sm">
                    <div className="h-[20px] bg-gray-300 rounded w-3/4 mb-3"></div>
                    <div className="h-[12px] bg-gray-200 rounded w-[40%] mb-4"></div>
                    <div className="space-y-2 mb-4">
                        <div className="h-[10px] bg-gray-200 rounded w-full"></div>
                        <div className="h-[10px] bg-gray-200 rounded w-[90%]"></div>
                        <div className="h-[10px] bg-gray-200 rounded w-[80%]"></div>
                    </div>
                    <div className='flex items-center gap-3 max-md:gap-2 mt-3 max-md:-mt-1 max-xs:mt-0'>
                        <div className="h-[14px] w-[60px] bg-gray-300 rounded"></div>
                        <div className="w-[16px] h-[12px] bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCardShimmer;
