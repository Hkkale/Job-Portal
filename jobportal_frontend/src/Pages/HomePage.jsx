import React from 'react'
import Header from '../Header/Header'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Working from '../LandingPage/Working'
import Testimonials from '../LandingPage/Testimonials'
import Subscribe from '../LandingPage/Subscribe'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-mine-shaft-950 font-[poppins] w-full border-white box-border overflow-hidden'>
    
    <DreamJob/>
    <Companies/>
    <JobCategory/>
    <Working/>
    <Testimonials/>
    <Subscribe/>
    
    

    </div>
  )
}

export default HomePage
