import React from 'react'
import Hero from '../components/Hero'
import Main from '../layouts/Main'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </>
  )
}

export default Home