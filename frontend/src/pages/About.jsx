import React from 'react'
import PageLayout from '../components/common/PageLayout'
import Hero from '../components/about/Hero'
import Philosophy from '../components/about/Philosophy'
import AboutStory from '../components/about/AboutStory'
import Team from '../components/about/Team'
import CTA from '../components/about/CTA'

const About = () => {
  return (
    <PageLayout>
    <Hero />
    <Philosophy />
    <AboutStory />
    <Team />
    <CTA />
    </PageLayout>
  )
}

export default About
