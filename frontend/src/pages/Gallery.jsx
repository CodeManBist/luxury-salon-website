import React from 'react'
import PageLayout from '../components/common/PageLayout'
import Hero from '../components/gallery/Hero'
import GallerySection from '../components/gallery/GallerySection'
import CTA from '../components/gallery/CTA'
const Gallery = () => {
  return (
    <PageLayout>
    <Hero />
    <GallerySection />
    <CTA />
    </PageLayout>
  )
}

export default Gallery
