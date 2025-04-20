import LinedHeading from "../../../components/heading/LinedHeading"
import GlobalMap from '../../../assets/images/globalMap.webp';
import MilestoneCard from "../../../components/card/MilestoneCard";
import { useGetMilestonesQuery } from "../../../services/Milestones";
import { useEffect, useState } from "react";

const MilestoneSection = () => {
    const baseTop = 3;
    const [gap, setGap] = useState(270)
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
        <section className="mt-[75px] w-full " style={{ minHeight: `${dynamicHeight}px` }}>
            <LinedHeading Title='Major Milestones' />

            <div className="w-full relative mt-20"
                style={{ minHeight: `${dynamicHeight}px` }}
            >
                {/* Background Image */}
                <img
                    src={GlobalMap}
                    className="opacity-50 absolute z-10 w-full h-full object-contain top-1/2 -translate-y-1/2"
                />

                <div className="w-full h-full absolute inset-0 z-20 flex max-0md:flex-col max-0md:items-center">
                    {/* Even Index - Left Side */}
                    <div
                        className="w-1/2 relative max-0md:static max-0md:border-none max-0m-d:w-full"
                    >
                        <div
                            className="absolute left-1/2 -translate-x-1/2 w-full border-r-2 border-[#1637BA] border-dotted max-0md:hidden"
                            style={{ height: `${dottedLineHeight}px` }}
                        ></div>

                        {data?.milestones.map((item, index) => {
                            if (index % 2 !== 0) return null;
                            const topOffset = baseTop + index * gap;

                            return (
                                <div key={index}>
                                    {/* Dot */}
                                    <div
                                        className="w-6 h-6 max-[743px]:w-4 max-[743px]:h-4 bg-commonblue absolute -right-2.5 max-[743px]:-right-2 rotate-[42deg] max-0md:hidden"
                                        style={{ top: `${topOffset}px` }}
                                    ></div>

                                    {/* Card */}
                                    <div
                                        className="absolute right-10 max-[743px]:right-9 max-0md:right-1/2 max-0md:translate-x-1/2"
                                        style={{ top: `${topOffset}px` }}
                                    >
                                        <MilestoneCard title={item.title} text={item.description} index={index.toString()} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Odd Index - Right Side */}
                    <div className="h-full w-1/2 relative max-0md:static max-0m-d:w-full">
                        {data?.milestones.map((item, index) => {
                            if (index % 2 === 0) return null;
                            const topOffset = baseTop + index * gap;

                            return (
                                <div key={index}>
                                    {/* Dot */}
                                    <div
                                        className="w-6 h-6 max-[743px]:w-4 max-[743px]:h-4 bg-commonblue absolute -left-3.5 max-[743px]:-left-2 rotate-[42deg] max-0md:hidden"
                                        style={{ top: `${topOffset}px` }}
                                    ></div>

                                    {/* Card */}
                                    <div
                                        className="absolute left-10 max-[743px]:left-9 max-0md:left-1/2 max-0md:-translate-x-1/2"
                                        style={{ top: `${topOffset}px` }}
                                    >
                                        <MilestoneCard title={item.title} text={item.description} index={index.toString()} />
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
