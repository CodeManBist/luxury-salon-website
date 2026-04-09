import React from 'react'
import Navbar from "../components/common/Navbar";
import Hero from '../components/home/Hero';
import CuratedExperiences from '../components/home/CuratedExperiences';
import Features from '../components/home/Features';
import ScienceArt from '../components/home/ScienceArt';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <CuratedExperiences />
        <Features />
        <ScienceArt />
        <Testimonials />
        <Gallery />
    </>
  )
}

export default Home
