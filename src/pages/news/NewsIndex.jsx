import React from 'react'
import Hydro from '../../assets/images/hydro3.webp';
import CommonHero from '../../components/heroComponent/CommonHero';
import ShowNews from './ShowNews';

const NewsIndex = () => {
    return (
        <main>
            <CommonHero img={Hydro} title='News & Update' />
            <ShowNews />
        </main>
    )
}

export default NewsIndex