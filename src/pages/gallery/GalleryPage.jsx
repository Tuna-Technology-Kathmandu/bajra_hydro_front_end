import React from 'react'
import CommonHero from '../../components/heroComponent/CommonHero'
import Hydro from '../../assets/images/hydro3.webp'
import Gallery from './Gallery'

const GalleryPage = () => {
  return (
    <main>
      <CommonHero img={Hydro} title="Gallery"/>
      <Gallery />
    </main>
  )
}

export default GalleryPage
