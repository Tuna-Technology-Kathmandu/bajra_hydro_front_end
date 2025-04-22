import React, { useRef } from 'react'
import AboutCompany from './AboutCompany'
import AboutHistory from './AboutHistory'
import AboutMission from './AboutMission';
import AboutDirector from './AboutDirector';
import AboutTeam from './AboutTeam';
import { useGetCompanyInfoQuery } from '../../services/CompanyInfo'
import { useGetTeamQuery } from '../../services/Team';

const AboutDetail = () => {

    //for company info and history
    const { data, isFetching, isError } = useGetCompanyInfoQuery();
    const CompanyTitle = data?.company_information[0]?.company_info_title ?? 'Company Information';
    const CompanyInfo = data?.company_information[0]?.company_info ?? 'No Information Available At The Moment.'
    const HistoryTitle = data?.company_information[0]?.history_title ?? 'History';
    const HistoryInfo = data?.company_information[0]?.history_description ?? 'No Information Available At The Moment.'

    //for board members and teams
    const { data: members, isFetching: memberFetching, isError: memberError } = useGetTeamQuery();
    const boardMembers = members?.members?.filter(member => member.is_board_member);
    const otherMembers = members?.members?.filter(member => !member.is_board_member);
    console.log(boardMembers);
    console.log(otherMembers);



    const companyRef = useRef(null);
    const historyRef = useRef(null);
    const missionRef = useRef(null);
    const bodRef = useRef(null);
    const teamRef = useRef(null);

    const sections = ['Company Information', 'History', 'Our Mission and Vision', 'Board of Director', 'Our Team']
    const sectionRefs = [companyRef, historyRef, missionRef, bodRef, teamRef];

    const handleScroll = (index) => {
        const target = sectionRefs[index].current;
        const headerOffset = 150; // Change this based on your fixed header height
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    return (
        <section className="mt-16 px-[75px] max-md:px-[30px] flex justify-between gap-12 w-full max-md:flex-col-reverse max-md:items-between">
            {/* Sidebar */}
            <aside className="sticky top-36 h-fit self-start max-md:static max-md:mx-auto">
                {/* Heading */}
                <div className="flex items-center gap-1 max-md:gap-1">
                    <div className="w-16 bg-black max-2xl:w-14 max-md:w-12 max-1xl:w-6 h-[1px]"></div>
                    <p className="font-bold text-[22px] max-2xl:text-[20px] max-1xl:text-[16px] max-md:!text-[15px] max-sm:!text-[14px] max-md:text-center tracking-wider text-black">
                        About Us
                    </p>
                    <div className="w-16 bg-black max-2xl:w-14 max-md:w-12 max-1xl:w-6 h-[1px]"></div>
                </div>

                <ul className="mt-7">
                    {sections.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleScroll(index)}
                            className="text-sm max-1xl:text-xs mb-4 cursor-pointer hover:underline"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Content Area */}
            <div className="flex flex-col justify-start w-2/3 gap-10 max-md:w-full">
                <div ref={companyRef}>
                    <AboutCompany
                        title={CompanyTitle}
                        description={CompanyInfo}
                        isFetching={isFetching}
                        isError={isError}
                    />
                </div>
                <div ref={historyRef}>
                    <AboutHistory
                        title={HistoryTitle}
                        description={HistoryInfo}
                        isFetching={isFetching}
                        isError={isError}
                    />
                </div>
                <div ref={missionRef}>
                    <AboutMission />
                </div>
                <div ref={bodRef}>
                    <AboutDirector
                        members={boardMembers}
                        isFetching={memberFetching}
                        isError={memberError}
                    />
                </div>
                <div ref={teamRef}>
                    <AboutTeam
                        members={otherMembers}
                        isFetching={memberFetching}
                        isError={memberError}
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutDetail


