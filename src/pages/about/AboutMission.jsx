import React from 'react'
import { MissionValue } from '../../localData/mission/MissionAndValue';
import MissionCard from '../../components/card/MissionCard';
import { useGetMissionValuesQuery } from '../../services/MissionValues';
import MissionCardShimmer from '../../components/Shimmer/MissionCardShimmer';

const AboutMission = () => {
    const { data, isFetching, isError } = useGetMissionValuesQuery();

    const mission = data?.mission_and_vision[0]?.mission ?? MissionValue.mission;
    const value = data?.mission_and_vision[0]?.vision ?? MissionValue.value;

    if (isError) {
        return (
            <section className='w-full h-[300px] flex items-center justify-center'>
                <p className='loading'>
                    Failed to load mission and values. Please try again later.
                </p>
            </section>
        );
    }
    return (
        <section className='w-full'>
            <h1 className='font-bold text-[22px] text-center max-2xl:text-[21px] max-md:text-[18px] max-sm:text-[15px] mb-10'>Our Misson And Value</h1>
            {
                isFetching ? (
                    <div className='grid grid-cols-2 max-1xl:grid-cols-1 w-full gap-6'>
                        <MissionCardShimmer />
                        <MissionCardShimmer />
                    </div>
                ) : (
                    <div className='grid grid-cols-2 max-1xl:grid-cols-1 w-full gap-6'>
                        <MissionCard list={mission} title='Mission' />
                        <MissionCard list={value} title='Value' />
                    </div>
                )
            }
        </section>
    )
}

export default AboutMission