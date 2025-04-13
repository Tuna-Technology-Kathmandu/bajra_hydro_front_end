import React from 'react'
import { MissionValue } from '../../localData/mission/MissionAndValue';
import MissionCard from '../../components/card/MissionCard';

const AboutMission = () => {
    return (
        <section className='w-full'>
            <h1 className='font-bold text-[22px] text-center max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px] mb-10'>Our Misson And Value</h1>
            <div className='grid grid-cols-2 max-1xl:grid-cols-1 w-full gap-6'>
                <MissionCard list={MissionValue.mission} title='Mission' />
                <MissionCard list={MissionValue.value} title='Value' />
            </div>
        </section>
    )
}

export default AboutMission