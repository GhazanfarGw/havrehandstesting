import React from 'react'
import Navber from '../header&footer/navbar'
import Footer from '../header&footer/footer'
import Dashboard from './dashboard'
import Build from '../home/build'
import Subsribe from '../home/subscribe'
import About from './about'


function index() {
  return (
    <>
    <Navber/>
    <Dashboard/>
    <About/>
    <Build/>
    <Subsribe/>
    <Footer/>
    </>
  )
}

export default index