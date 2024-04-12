import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Homecards from './components/Homecards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero title="Tima" subtitle='toma'/>
    <Homecards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}

export default App