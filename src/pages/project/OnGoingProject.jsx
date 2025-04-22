import React, { lazy } from 'react'
import Hydro from '../../assets/images/hydro3.webp';
import CommonHero from '../../components/heroComponent/CommonHero';
const ShowProjects = lazy(() => import('./ShowProjects'))

const OnGoingProject = () => {
    return (
        <main>
            <CommonHero img={Hydro} title='Project' />
            <ShowProjects />
        </main>
    )
}

export default OnGoingProject