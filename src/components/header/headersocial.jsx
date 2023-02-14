import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const headersocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/sarah-al-azzawi-186606232/' target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href='https://github.com/sarahalazzawi' target="_blank"><FaGithub></FaGithub></a>
      
    </div>
  )
}

export default headersocial