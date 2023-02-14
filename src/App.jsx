
import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experience from './components/experience/experience'
/* import Services from './components/services/services'*/
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
/* import Testimonials from './components/testimonials/testimonials'
 */import Footer from './components/footer/footer'
const App = () => {
  return (
    <>
     <Header/>
     <Nav />
     <About/>
     <Experience />
   {/*   <Services />*/}
     <Portfolio /> 
     <Contact/> 
  {/*    <Testimonials /> */}
     <Footer />
    </>
  )
}

export default App