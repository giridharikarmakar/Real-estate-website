import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Companies from './components/companies/Companies'
import './App.css'
import Residencies from './components/Residencies/Residencies'
import Value from './components/value/Value'
import Contact from './components/contact/Contact'
import GetStarted from './components/getstarted/GetStarted'
import Footer from './components/footer/Footer'
const App = () => {
  return (
  <div className='App'>
    <div>
      <div className="white-gradient"/>
     <Header/>
      <Hero/>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>


    </div>
  </div>
  )
}

export default App