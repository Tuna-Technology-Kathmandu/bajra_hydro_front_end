import React from 'react';

const ProjectCardShimmer = () => {
    return (
        <div className="w-full h-auto p-3 rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
            {/* Image Skeleton */}
            <div className="bg-slate-200 animate-pulse h-[260px] max-md:h-[200px] w-full rounded-[9px]"></div>

            {/* Title Skeleton */}
            <div className="mt-3 h-5 w-3/4 bg-slate-200 rounded animate-pulse"></div>

            {/* Content Skeleton */}
            <div className="mt-3 space-y-2">
                <div className="h-3 w-full bg-slate-200 rounded animate-pulse"></div>
                <div className="h-3 w-5/6 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-3 w-4/6 bg-slate-200 rounded animate-pulse"></div>
            </div>
        </div>
    );
};

export default ProjectCardShimmer;
