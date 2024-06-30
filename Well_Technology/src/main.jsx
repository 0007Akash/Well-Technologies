import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Solution from './components/Solution.jsx'
import SuccessStory from './components/SuccessStory.jsx'
import Latest from './components/Latest.jsx'
import BusinessRewards from './components/BusinessRewards.jsx'
import Footer from './components/Footer.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <Navbar />
      <Hero />
      <Products />
      <Solution />
      <SuccessStory />
      <Latest />
      <BusinessRewards />
      <Footer />
    </React.StrictMode>
  </ChakraProvider >,
)
