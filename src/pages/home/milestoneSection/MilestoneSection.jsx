import { useLayoutEffect, useState } from "react";
import LinedHeading from "../../../components/heading/LinedHeading";
import GlobalMap from "../../../assets/images/globalMap.webp";
import MilestoneCard from "../../../components/card/MilestoneCard";
import { useGetMilestonesQuery } from "../../../services/Milestones";
// const milestones = [
//     {
//         _id: "681af85ec27b4583772f48ee",
//         title: "Project Identification & Feasibility Studies",
//         description:
//             "Comprehensive site and hydrological assessments, economic viability analysis, and EIA/SIA ensure informed project planning. These studies identify environmental, social, and financial impacts, while regulatory compliance and risk assessments help mitigate potential legal and operational issues, ensuring responsible and sustainable project development.",
//         createdAt: "2025-05-07T06:06:22.907Z",
//         updatedAt: "2025-05-07T06:06:22.907Z",
//         __v: 0
//     },
//     {
//         _id: "681af85ec27b4583772f48ee",
//         title: "Project Identification & Feasibility Studies",
//         description:
//             "Comprehensive site and hydrological assessments, economic viability analysis, and EIA/SIA ensure informed project planning. These studies identify environmental, social, and financial impacts, while regulatory compliance and risk assessments help mitigate potential legal and operational issues, ensuring responsible and sustainable project development.",
//         createdAt: "2025-05-07T06:06:22.907Z",
//         updatedAt: "2025-05-07T06:06:22.907Z",
//         __v: 0
//     },
//     {
//         _id: "681af85ec27b4583772f48ee",
//         title: "Project Identification & Feasibility Studies",
//         description:
//             "Comprehensive site and hydrological assessments, economic viability analysis, and EIA/SIA ensure informed project planning. These studies identify environmental, social, and financial impacts, while regulatory compliance and risk assessments help mitigate potential legal and operational issues, ensuring responsible and sustainable project development.",
//         createdAt: "2025-05-07T06:06:22.907Z",
//         updatedAt: "2025-05-07T06:06:22.907Z",
//         __v: 0
//     },
//     {
//         _id: "681af85ec27b4583772f48ee",
//         title: "Project Identification & Feasibility Studies",
//         description:
//             "Comprehensive site and hydrological assessments, economic viability analysis, and EIA/SIA ensure informed project planning. These studies identify environmental, social, and financial impacts, while regulatory compliance and risk assessments help mitigate potential legal and operational issues, ensuring responsible and sustainable project development.",
//         createdAt: "2025-05-07T06:06:22.907Z",
//         updatedAt: "2025-05-07T06:06:22.907Z",
//         __v: 0
//     },
//     {
//         _id: "681af85ec27b4583772f48ef",
//         title: "Design & Engineering",
//         description:
//             "Technical design and engineering define project specifications, structural integrity, and technological implementation. These processes involve detailed planning and simulations to ensure operational efficiency and long-term reliability.",
//         createdAt: "2025-05-07T06:10:30.123Z",
//         updatedAt: "2025-05-07T06:10:30.123Z",
//         __v: 0
//     },
//     {
//         _id: "681af85ec27b4583772f48f0",
//         title: "Procurement & Contracting",
//         description:
//             "Straation for a cost-effective and timely construction phase.",
//         createdAt: "2025-05-07T06:12:45.456Z",
//         updatedAt: "2025-05-07T06:12:45.456Z",
//         __v: 0
//     },
//     {
//         _id: "681af85ec27b4583772f48f1",
//         title: "Construction & Supervision",
//         description:
//             "Project construction begins with Final system checks, sidfhsfi sidfhsf asdofisodfperformance testing, and documentation are conducted before handing over operations to stakeholders. This stage ensures that the project meets all operational, safety, and regulatory standards Final system checks, performance testing, and documentation are conducted before handing over operations to stakeholders. This stage ensures that the project meets all operational, safety, and regulatory standardsstrict adherence to design, timelines, and safety protocols. Supervisory teams ensure quality control, on-site compliance, and progress monitoring to meet delivery targets.",
//         createdAt: "2025-05-07T06:15:00.789Z",
//         updatedAt: "2025-05-07T06:15:00.789Z",
//         __v: 0
//     },
//     {
//         _id: "681af85ec27b4583772f48f2",
//         title: "Commissioning & Handover",
//         description:
//             "Fldersfore handing over operations to stakeholders. This stage ensures that the project meets all operational, safety, and regulatory standardsFinal system checks, performance testing, and documentation are conducted before handing over operations to stakeholders. This stage ensures that the project meets all operational, safety, and regulatory standards",
//         createdAt: "2025-05-07T06:17:10.234Z",
//         updatedAt: "2025-05-07T06:17:10.234Z",
//         __v: 0
//     },
//     {
//         _id: "681af85ec27b4583772f48f2",
//         title: "Commissioning & Handover",
//         description:
//             "Fldersfore handing over operations to stakeholders. This stage ensures that the project meets all operational, safety, and regulatory standardsFinal system checks, performance testing, and documentation are conducted before handing over operations to stakeholders. This stage ensures that the project meets all operational, safety, and regulatory standards",
//         createdAt: "2025-05-07T06:17:10.234Z",
//         updatedAt: "2025-05-07T06:17:10.234Z",
//         __v: 0
//     },
//     {
//         _id: "681af85ec27b4583772f48f2",
//         title: "Commissioning & Handover",
//         description:
//             "Fldersfore handing over operations to stakeholders. This stage ensures that the project meets all operational, safety, and regulatory standardsFinal system checks, performance testing, and documentation are conducted before handing over operations to stakeholders. This stage ensures that the project meets all operational, safety, and regulatory standards",
//         createdAt: "2025-05-07T06:17:10.234Z",
//         updatedAt: "2025-05-07T06:17:10.234Z",
//         __v: 0
//     },

// ];
const MilestoneSection = () => {
    const baseTop = 3;
    const [gap, setGap] = useState(270);
    const extraOffset = 0;
    const [width, setWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const diamondSize = 24;
    const { data } = useGetMilestonesQuery();
    const milestones = data?.milestones || [];
    const milestoneCount = milestones.length || 0;

    // This is the vertical space covered by all milestones
    const dynamicHeight = baseTop + gap * (milestoneCount + 1) + extraOffset;

    // This is where the center of the last diamond should be
    const dottedLineHeight = baseTop + gap * (milestoneCount - 1) + diamondSize / 2;

    if (width < 680) {
        return (
            <section className="mt-14 w-full " >
                <LinedHeading Title="Major Milestones" />
                <div className=" mt-12 w-full h-auto">
                    <div className="flex flex-col items-center gap-10 z-20 px-4">
                        {milestones?.map((item, index) => (
                            <MilestoneCard
                                key={index}
                                title={item.title}
                                text={item.description}
                                index={index.toString()}
                            />
                        ))}
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className="mt-[75px] w-full "
                style={{ height: `${dynamicHeight}px` }}
            >
                <LinedHeading Title="Major Milestones" />
                < div className="relative w-full mt-20 h-full" >
                    <img
                        src={GlobalMap}
                        className="opacity-50 absolute z-10 w-full object-contain top-1/2 -translate-y-1/2 "
                        alt="Map"
                    />

                    <div className="w-full h-full absolute inset-0 z-20 flex">
                        {/* Left Side (Even Indexes) */}
                        <div className="w-1/2 relative">
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-full border-r-2 border-[#1637BA] border-dotted"
                                style={{ height: `${dottedLineHeight}px` }}
                            ></div>
                            {milestones.map((item, index) => {
                                if (index % 2 !== 0) return null;
                                const topOffset = baseTop + index * gap;
                                return (
                                    <div key={index}>
                                        <div
                                            className="w-6 h-6 bg-commonblue absolute -right-2.5 rotate-[42deg]"
                                            style={{ top: `${topOffset}px` }}
                                        ></div>
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
                            {milestones.map((item, index) => {
                                if (index % 2 === 0) return null;
                                const topOffset = baseTop + index * gap;
                                return (
                                    <div key={index}>
                                        <div
                                            className="w-6 h-6 bg-commonblue absolute -left-3.5 rotate-[42deg]"
                                            style={{ top: `${topOffset}px` }}
                                        ></div>
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
            </section >
        )
    }
};

export default MilestoneSection;
