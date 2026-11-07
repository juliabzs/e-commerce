import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import Category from './components/Category'
import Order from './components/Order'
import Products from './components/Products'
import Collection from './components/Collection'
import Deals from './components/Deals'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
      offset: 100,
    })
  }, []);
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Category />
      <Order />
      <Products />
      <Collection />
      <Deals />
      <Cards />
      <Footer />
    </div>
  )
}

export default App