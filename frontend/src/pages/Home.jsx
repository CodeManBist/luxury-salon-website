import React from 'react'
import PageLayout from "../components/common/PageLayout";
import Hero from '../components/home/Hero';
import CuratedExperiences from '../components/home/CuratedExperiences';
import Features from '../components/home/Features';
import ScienceArt from '../components/home/ScienceArt';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <PageLayout>
        <Hero />
        <CuratedExperiences />
        <Features />
        <ScienceArt />
        <Testimonials />
        <Gallery />
        <CTA />
    </PageLayout>
  )
}

export default Home
