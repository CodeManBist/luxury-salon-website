import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/about/Hero'
import Philosophy from '../components/about/Philosophy'
import AboutStory from '../components/about/AboutStory'
import Team from '../components/about/Team'
import CTA from '../components/about/CTA'

const About = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Philosophy />
    <AboutStory />
    <Team />
    <CTA />
    <Footer />
    </>
  )
}

export default About
