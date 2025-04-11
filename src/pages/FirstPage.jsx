import React from 'react'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import GallerySection from '../components/GallerySection'
import ToolsSection from '../components/ToolsSection'
import AboutSection from '../components/AboutSection'
import Contact from '../components/Contact'


const FirstPage = () => {
  return (
    <>  
        <HomeSection />
        <GallerySection />
        <ToolsSection />
        <AboutSection />
        <Contact />
    </>
  )
}

export default FirstPage
