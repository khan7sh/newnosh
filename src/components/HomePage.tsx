import React from 'react'
import Hero from './Hero'
import Menu from './Menu'
import Booking from './Booking'
import About from './About'
import KenzaCoffee from './KenzaCoffee'
import FAQ from './FAQ'

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Booking />
      <About />
      <KenzaCoffee />
      <FAQ />
    </>
  )
}

export default HomePage