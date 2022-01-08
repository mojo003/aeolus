import React from 'react';
import '../form.scss';

function Form() {
  return [
    <div className='container'>
      <h1>Nous contacter</h1>
        <form action="" className='form'>
          <div className='name'>
            <label htmlFor="firstName" >Prénom: </label>
            <input type="text" name='firstName' className='firstName' tabIndex='1' placeholder='Prénom' />

            <label htmlFor="lastName" >Nom: </label>
            <input type="text" name='lastName' className='lastName' tabIndex='2' placeholder='Nom' />
          </div>

          <label htmlFor="email">Courriel: </label>
          <input type="email" name='email' id='email' className='email' placeholder='exemple@hotmail.com' tabIndex='3' />

          <label htmlFor="phone">Téléphone: </label>
          <input type="phone" name='phone' id='phone' className='phone' placeholder='000-000-0000' tabIndex='4' />

          <label htmlFor="message">Message: </label>
          <textarea name="message" cols="30" rows="30" className='message' />
          
          <button  type='submit' className='send'>Envoyé </button>

        </form>
    </div>
  ]
}
export default From