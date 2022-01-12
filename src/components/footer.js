import React from 'react';
import '../index.css';
import fb from '../img/facebook-logo.png';
import ig from '../img/instagram-logo.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = ({ footer }) => {
  return (

    <div className='footer'>
      <Container>
        <Row>
          <Col className='textFooter' >Copyright: Aeolus, quintette de cuivre</Col>
          <Col xl lg="2"><a href='https://www.facebook.com/aeolus5tecuivres' target='_blank'><img src={fb}  alt="logo Facebook" className='logoFooter' /></a></Col>
          <Col xl lg="2"><a href='https://www.instagram.com/aeolus5tecuivres/' target='_blank'><img src={ig}  alt="logo Instagram" className='logoFooter' /></a></Col>

        </Row>
      </Container>
    </div>
  )
}

export default Footer;