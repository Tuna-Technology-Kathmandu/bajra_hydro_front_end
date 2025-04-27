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
    const {
        data: companyData,
        isFetching: isCompanyFetching,
        isError: isCompanyError,
    } = useGetCompanyInfoQuery();

    const companyInfo = companyData?.company_information;
    const companyInfoExists = Array.isArray(companyInfo) && companyInfo.length > 0;

    const company = companyInfoExists ? companyInfo[0] : {};

    const CompanyTitle = company?.company_info_title || 'Company Information';
    const CompanyInfo = company?.company_info || 'No Information Available At The Moment.';
    const HistoryTitle = company?.history_title || 'History';
    const HistoryInfo = company?.history_description || 'No Information Available At The Moment.';

    // Fetch team members
    const {
        data: membersData,
        isFetching: memberFetching,
        isError: memberError,
    } = useGetTeamQuery();

    const allMembers = Array.isArray(membersData?.members) ? membersData.members : [];

    const boardMembers = allMembers.filter(member => member?.is_board_member);
    const otherMembers = allMembers.filter(member => !member?.is_board_member);



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
                        isFetching={isCompanyFetching}
                        isError={isCompanyError}
                    />
                </div>
                <div ref={historyRef}>
                    <AboutHistory
                        title={HistoryTitle}
                        description={HistoryInfo}
                        isFetching={isCompanyFetching}
                        isError={isCompanyError}
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


