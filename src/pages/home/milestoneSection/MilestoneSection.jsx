import LinedHeading from "../../../components/heading/LinedHeading";
import GlobalMap from "../../../assets/images/globalMap.webp";
import MilestoneCard from "../../../components/card/MilestoneCard";
import { useGetMilestonesQuery } from "../../../services/Milestones";
import { useEffect, useState } from "react";

const MilestoneSection = () => {
    const baseTop = 3;
    const [gap, setGap] = useState(270);
    const extraOffset = 300;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setGap(160);
            } else if (window.innerWidth < 1024) {
                setGap(200);
            } else {
                setGap(270);
            }
        };

        handleResize(); // set on first load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { data } = useGetMilestonesQuery();
    const milestoneCount = data?.milestones?.length || 0;
    const dynamicHeight = baseTop + gap * (milestoneCount - 1) + extraOffset;
    const dottedLineHeight = baseTop + gap * (milestoneCount - 1);

    return (
        <section className="mt-[75px] max-[642px]:mt-14 w-full">
            <LinedHeading Title="Major Milestones" />

            {/* === Desktop/Tablet View === */}
            <div className="hidden max-0md:block mt-12 w-full">
                <div className="flex flex-col items-center gap-10 z-20 px-4">
                    {data?.milestones?.map((item, index) => (
                        <MilestoneCard
                            key={index}
                            title={item.title}
                            text={item.description}
                            index={index.toString()}
                        />
                    ))}
                </div>
            </div>

            {/* === Large Screen Timeline View === */}
            <div
                className="relative w-full mt-20 max-0md:hidden"
                style={{ minHeight: `${dynamicHeight}px` }}
            >
                {/* Background Image */}
                <img
                    src={GlobalMap}
                    className="opacity-50 absolute z-10 w-full h-full object-contain top-1/2 -translate-y-1/2"
                    alt="Map"
                />

                {/* Timeline Line */}
                <div className="w-full h-full absolute inset-0 z-20 flex">
                    {/* Left Side (Even Indexes) */}
                    <div className="w-1/2 relative">
                        <div
                            className="absolute left-1/2 -translate-x-1/2 w-full border-r-2 border-[#1637BA] border-dotted"
                            style={{ height: `${dottedLineHeight}px` }}
                        ></div>

                        {data?.milestones.map((item, index) => {
                            if (index % 2 !== 0) return null;
                            const topOffset = baseTop + index * gap;

                            return (
                                <div key={index}>
                                    {/* Dot */}
                                    <div
                                        className="w-6 h-6 bg-commonblue absolute -right-2.5 rotate-[42deg]"
                                        style={{ top: `${topOffset}px` }}
                                    ></div>

                                    {/* Card */}
                                    <div
                                        className="absolute right-10"
                                        style={{ top: `${topOffset}px` }}
                                    >
                                        <MilestoneCard
                                            title={item.title}
                                            text={item.description}
                                            index={index.toString()}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side (Odd Indexes) */}
                    <div className="w-1/2 relative">
                        {data?.milestones.map((item, index) => {
                            if (index % 2 === 0) return null;
                            const topOffset = baseTop + index * gap;

                            return (
                                <div key={index}>
                                    {/* Dot */}
                                    <div
                                        className="w-6 h-6 bg-commonblue absolute -left-3.5 rotate-[42deg]"
                                        style={{ top: `${topOffset}px` }}
                                    ></div>

                                    {/* Card */}
                                    <div
                                        className="absolute left-10"
                                        style={{ top: `${topOffset}px` }}
                                    >
                                        <MilestoneCard
                                            title={item.title}
                                            text={item.description}
                                            index={index.toString()}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MilestoneSection;
