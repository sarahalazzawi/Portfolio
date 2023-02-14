import React from 'react'
import'./header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocial from './headersocial'


const header = () => {
  return (
    <header>
     <div  className="container header__container">
        <h5> HELLO I'm</h5>
        <h1>Sarah Al-Azzawi </h1>
        <h5 className="text-light"> Front-End Developer </h5>
        <CTA></CTA>
        <Headersocial></Headersocial>
        <div className='me'>
<img src={ME}  alt='me'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
     </div> 
    </header>
  )
}

export default header