import React from 'react'
import Hydro from '../../assets/images/hydro3.webp';
import CommonHero from '../../components/heroComponent/CommonHero';
import ShowProjects from './ShowProjects';

const OnGoingProject = () => {
    return (
        <main>
            <CommonHero img={Hydro} title='Ongoing Project' />
            <ShowProjects />
        </main>
    )
}

export default OnGoingProject