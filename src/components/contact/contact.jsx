import React ,{useRef as UseRef}  from 'react'
import'./contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import{RiMessengerFill} from 'react-icons/ri'
import{AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from 'emailjs-com';
const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zshvgwh', 'template_bt7w19h', form.current, 'w692XCR3buZ3nPZQF')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section  id='contact'>
   <h5> Get In Touch </h5>
   <h2>   Contact  Me</h2>
   <div  className='container  contact__container'>
   <div  className='contact__options'>
  
                <article className='contact__option'>
              <MdOutlineEmail   className='contact__options-icon'></MdOutlineEmail>
                <h4> E-Mail</h4>
                <h5>sarahkalazzawi@gmail.com</h5>
                <a href="mailto:sarahkalazzawi@gmail.com"   target="_blank">Send a message</a>
              </article>
              <article className='contact__option'>
             <AiOutlineWhatsApp  className='contact__options-icon'></AiOutlineWhatsApp>
              <h4>Whatsapp</h4>
              <h5>+4915731058417</h5>
              <a href='https://api.whatsapp.com/send?phone=+49015731058417'    target="_blank">Send a message</a>
              </article>
              <article className='contact__option'>
              <RiMessengerFill   className='contact__options-icon'></RiMessengerFill>
              <h4>Messenger</h4>
              <h5>Sarah Al-Azzawi</h5>
              <a href='https://m.me/sarah.khalodi.5/'     target="_blank">Send a message</a>
             </article>
             </div> 
        {/* END OF CONTACT OPTION */}
         <form ref={form}   onSubmit={sendEmail}>
          <input type='text' name='name'  placeholder='Your Full Name'  required></input>
          <input type='text' name='email'  placeholder='Your E-Mail'  required></input>
          <textarea name='message'  rows='7' placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> 
   </div>
   
    </section>
  )
}

export default contact
