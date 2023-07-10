import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import Services from '../Components/Services/Services'
import About from '../Components/About/About'
import Articles from '../Components/Articles/Articles'
import Contact from '../Components/Contact/Contact'
import Covid from '../Components/Covid-19/Covid'
import Agents from '../Components/Agents/Agents'
import Address from '../Components/Address/Address'


const HomePages = () => {
  return ( <>
  <Header/>
    <main>
<Home/>
<Services/>
<About/>
<Covid/>
<Agents/>
<Articles/>
<Contact/>
<Address/>
</main>
    <Footer/>
  </>
    
  ) 
 
}

export default HomePages