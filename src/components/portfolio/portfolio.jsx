import React from 'react'
import'./portfolio.css'
import memory from '../../assets/memory.PNG'
import shoppingCart from '../../assets/Shopping cart.PNG'
import todoList from '../../assets/todo list.PNG'
import EFZ from '../../assets/EFZ.PNG'
const portfolio = () => {
  return (
    <section id='portfolio'>
    <h5> My Recent Work </h5>
   <h2>portfolio</h2> 
   
   <div  className='container portfolio__container'>
<article   className='portfolio__item'>
<div  className='portfolio__item-image'>
 <img  src={memory}     alt='memory'/> 
</div>
<h3> Memory Game  </h3>
<div className='portfolio__item-cta'>
<a  href='https://github.com/sarahalazzawi/memory-game-' className='btn'  target='_blank'>Github</a>
<a  href='https://aquamarine-malasada-6792f2.netlify.app/' className='btn btn-primary'  target='_blank' >Live Demo</a>

</div>

</article>
<article   className='portfolio__item'>
<div  className='portfolio__item-image'>
 <img  src={shoppingCart}     alt='shoppingCart'/> 
</div>
<h3>   Shopping Cart</h3>
<div className='portfolio__item-cta'>
<a  href='https://github.com/sarahalazzawi/Shopping-Cart' className='btn'  target='_blank'>Github</a>
<a  href='https://cool-kitten-c6c6d2.netlify.app' className='btn btn-primary'  target='_blank' >Live Demo</a>
</div>
</article>
<article   className='portfolio__item'>
<div  className='portfolio__item-image'>
 <img  src={todoList}     alt='todoList'/> 
</div>
<h3>ToDo List </h3>
<div className='portfolio__item-cta'>
<a  href='https://github.com/sarahalazzawi/Todo-list-js' className='btn'  target='_blank'>Github</a>
<a  href='https://golden-croissant-f04873.netlify.app/' className='btn btn-primary'  target='_blank' >Live Demo</a>
</div>
</article>
<article   className='portfolio__item'>
<div  className='portfolio__item-image'>
 <img  src={EFZ}     alt='EFZ'/> 
</div>
<h3> EFZ  Energy für zukunft </h3>
<div className='portfolio__item-cta'>
<a  href='https://github.com/sarahalazzawi/Energy-Webseit' className='btn'  target='_blank'>Github</a>
<a  href='https://cozy-beijinho-2e0df3.netlify.app' className='btn btn-primary'  target='_blank' >Live Demo</a>
</div>

</article>
   </div>
   
   </section>
  )
}

export default portfolio