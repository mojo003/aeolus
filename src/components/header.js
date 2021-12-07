import React from 'react';
import '../index.css';
import banner from '../img/bannerAeolus.jpg';


const Header = ({ title }) => {
  return (
    <header className='header'>
      <img src = {banner} alt = "Bannière Aeolus" />
    </header>
  )
}

Header.defaultProps = {
  title: 'Aeolus',
}

export default Header