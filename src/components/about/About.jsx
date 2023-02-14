//rafce function component
import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
/* import ME from '../../assets/me.jpg'
 */import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section  id='about'>
    <h5> Get To Know </h5>
    <h2> About Me </h2>
    <div  
    className='container about__container'>
     <div className='about__me'>
<div className='about__me-image'>
<img src={ME}    alt='about-me'></img>
</div>

     </div>

     <div className='about__content'>
      <div className='about__cards'>
      <article className='about__card'>
      <FaAward  className='about__icon'></FaAward>
          <h5>Experience</h5>
          <h2>1+ Year working</h2>
      </article>
      <article className='about__card'>
      <FiUsers  className='about__icon'></FiUsers>
          <h5>Clients</h5>
          <h2>+1 company</h2>
      </article>
      <article className='about__card'>
      <VscFolderLibrary  className='about__icon'></VscFolderLibrary>
          <h5>Projects</h5>
          <h2>4+ Complited</h2>
      </article>
      </div>

      <p>
      My name is Sarah Al-Azzawi I'm a Front End Engineer based in Germany . I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.

Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. Also I enjoy writing technical things ✍️ at my blog.
</p>
      <a href='#contact'  className='btn btn-primary'>Let's Talk</a>
     </div>
    </div>
    </section>
  )
}

export default About