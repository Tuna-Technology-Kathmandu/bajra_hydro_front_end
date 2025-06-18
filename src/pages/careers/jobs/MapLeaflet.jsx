import React from 'react'
import CompanyMap from '../../../components/map/CompanyMap'

const MapLeaflet = () => {
    return (
        <div className='w-full h-[390px] mt-20 max-md:mt-10 relative z-0'>
            <CompanyMap />
        </div>

    )
}

export default MapLeaflet