const NavbarSearchCardShimmer = () => {
    return (
        <div className="w-full h-auto p-3 rounded-[10px] bg-white/10 backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.15)] animate-pulse">
            <div className="bg-gray-300 h-[200px] max-2xl-1l:h-[180px] max-md:h-[150px] max-[531px]:h-[120px] w-full overflow-hidden rounded-[9px]"></div>
            <div className="mt-3">
                <div className="h-4 max-md:h-3 max-[531px]:h-2 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 max-md:h-3 max-[531px]:h-2 bg-gray-300 rounded w-1/2"></div>
            </div>
        </div>
    );
};

export default NavbarSearchCardShimmer;
