import React from 'react';
import '../index.css';
//Bootstrap import
import Carousel from 'react-bootstrap/Carousel';


//image pour musiciens
import denis from '../img/denis.jpg';
import nicolas from '../img/nicolas.jpg';
import magellan from '../img/magellan.jpg';
import jonathan from '../img/jonathan.jpg';
import justin from '../img/justin.jpg';


class Bio extends React.Component{

    //Text Bio event pour les musiciens
    trp1Click = (e) => {
        e.preventDefault();
        
      };

  render(){



    
      return(

        <Carousel>
                <Carousel.Item>
                    <img
                        className="carroussel-img" 
                        src= {denis}
                        alt="Denis Falardeau"
                    />
                <Carousel.Caption>
                    <h3>Denis Falardeau</h3>
                    <p>trompette</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img onClick={this.trp1Click}
                        className="carroussel-img"
                        src= {nicolas}
                        alt="Nicolas Leblanc"
                         /> 
                <Carousel.Caption>
                    <h3 onClick={this.trp1Click}>Nicolas Leblanc</h3>
                    <p onClick={this.trp1Click}>Trompette</p>
                </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="carroussel-img"
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
                    className="carroussel-img"
                    src= {jonathan}
                    alt="Jonathan Moreau"
                    />
                <Carousel.Caption>
                    <h3>Jonathan Moreau</h3>
                    <p>Trombone</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="carroussel-img"
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