const GalleryShimmer = () => {
    return (
        <div className="bg-white mb-10 w-full flex max-[734px]:flex-wrap justify-between gap-4 max-[767px]:gap-2">
            {/* Right Section (Big Image Placeholder) */}
            <div className="relative rounded-lg flex-grow overflow-hidden h-[460px] max-[1041px]:h-[300px] bg-slate-300 animate-pulse" />

            {/* Left Section (4 Small Images) */}
            <div className="w-[484px] max-[1041px]:w-64 max-[734px]:w-full grid grid-cols-2 max-[388px]:grid-cols-1 max-[388px]:h-[560px] gap-4 max-[767px]:gap-2 h-[460px] max-[1041px]:h-[300px]">
                {Array(4).fill(0).map((_, i) => (
                    <div
                        key={i}
                        className="w-full h-full rounded-lg bg-slate-300 animate-pulse"
                    />
                ))}
            </div>
        </div>
    );
};

export default GalleryShimmer;
