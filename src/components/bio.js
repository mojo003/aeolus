import React from 'react';
import '../index.css';
import Carousel from 'react-bootstrap/Carousel';
import denis from '../img/denis.jpg';
import nicolas from '../img/nicolas.jpg';
import magellan from '../img/magellan.jpg';
import jonathan from '../img/jonathan.jpg';
import justin from '../img/justin.jpg';


class Bio extends React.Component{

  render(){
      return(
          <Carousel>

              <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {denis}
                    alt="Denis Falardeau"
                />
              <Carousel.Caption>
                  <h3>Denis Falardeau</h3>
                  <p>trompette</p>
              </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {nicolas}
                    alt="Nicolas Leblanc"
                /> 
              <Carousel.Caption>
                  <h3>Nicolas Leblanc</h3>
                  <p>Trompette</p>
              </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src= {magellan}
                  alt="Magellan Strubbe"
              />
              <Carousel.Caption>
                  <h3>Magellan Strubbe</h3>
                  <p>Cor français</p>
              </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src= {jonathan}
                  alt="Third slide"
              />
              <Carousel.Caption>
                  <h3>Jonathan Moreau</h3>
                  <p>Trombone</p>
              </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img
                  className="d-block w-100"
                  src= {justin}
                  alt="Justin Gauthier"
              />
              <Carousel.Caption>
                  <h3>Justin Gauthier</h3>
                  <p>Trombone basse</p>
              </Carousel.Caption>
              </Carousel.Item>
              
          </Carousel>
      )
  }
  
}

export default Bio;