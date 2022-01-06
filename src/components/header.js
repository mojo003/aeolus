import React from 'react';
import '../index.css';
import banner from '../img/bannerAeolus.jpg';
import logo from '../img/AEOLUS logo_transparent_background.png';
import Image from 'react-bootstrap/Image';


const Header = ({ title }) => {
  return (
    <header className='header'>
      <Image src = {banner} className='banner' alt = "Bannière Aeolus" fluid rounded />
      <img src = {logo} className='logo' alt = "logo Aeolus" />
    </header>
  )
}

Header.defaultProps = {
  title: 'Aeolus',
}

export default Header