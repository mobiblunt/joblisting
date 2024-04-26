import React from 'react'
import Hero from '../components/Hero'
import Homecards from '../components/Homecards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero title="React Jobs" subtitle='find react jobs here' />
    <Homecards />
    <JobListings isHome={true} />
    <ViewAllJobs />
    </>
  )
}

export default HomePage