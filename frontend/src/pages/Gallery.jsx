import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/gallery/Hero'
import GallerySection from '../components/gallery/GallerySection'
import CTA from '../components/gallery/CTA'
const Gallery = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <GallerySection />
    <CTA />
    <Footer />
    </>
  )
}

export default Gallery
