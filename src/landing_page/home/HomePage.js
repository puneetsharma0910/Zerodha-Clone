import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
      <Footer/>

    </div>
  )
}

export default HomePage
