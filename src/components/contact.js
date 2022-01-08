import React from 'react';
import '../form.scss';
import emailjs from 'emailjs-com';
import{ init } from '@emailjs/browser';
init("user_ILXRXmki3rSBV6Sr3BxyT");


function Form() {

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm('service_5mgsnyc', 'template_7mbjf4q', e.target, 'user_ILXRXmki3rSBV6Sr3BxyT')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
  




  return [
    <div className='container'>
      <h1>Nous contacter</h1>
        <form onSubmit={handleSubmit} className='form'>
          <div className='name'>
            <label htmlFor="firstName" >Prénom: </label>
            <input type="text" name='firstName' className='firstName' tabIndex='1' placeholder='Prénom' />

            <label htmlFor="lastName" >Nom: </label>
            <input type="text" name='lastName' className='lastName' tabIndex='2' placeholder='Nom' />
          </div>

          <label htmlFor="email" className='emailLabel'>Courriel: </label>
          <input type="email" name='email' id='email' className='email' placeholder='exemple@hotmail.com' tabIndex='3' />

          <label htmlFor="phone" className='phoneLabel'>Téléphone: </label>
          <input type="phone" name='phone' id='phone' className='phone' placeholder='000-000-0000' tabIndex='4'  />

          <label htmlFor="message" className='messageLabel'>Message: </label>
          <textarea name="message" cols="30" rows="30" className='message' />
          
          <button  type='submit' className='send'>Envoyé</button>

        </form>
    </div>
  ]
}
export default Form