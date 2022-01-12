//import React

import '../index.css';
import React, { useState } from "react";


//Bootstrap import
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';


//image pour musiciens
import denis from '../img/denis.jpg';
import nicolas from '../img/nicolas.jpg';
import magellan from '../img/magellan.jpg';
import jonathan from '../img/jonathan.jpg';
import justin from '../img/justin.jpg';






function BioText(props) {

    
    // use state pour les biographies
    //Trompette 1
    const [showModalN, setShowN] = useState(false);
    const handleCloseN = () => setShowN(false);
    const handleShowN = () => setShowN(true);

    //Trompette 2   
    const [showModalF, setShowF] = useState(false);
    const handleCloseF = () => setShowF(false);
    const handleShowF = () => setShowF(true);   

    //Cor
    const [showModalM, setShowM] = useState(false);
    const handleCloseM = () => setShowM(false);
    const handleShowM = () => setShowM(true);   

    //Trombone 
    const [showModalJ, setShowJ] = useState(false);
    const handleCloseJ = () => setShowJ(false);
    const handleShowJ = () => setShowJ(true); 

    //Trombone basse 
    const [showModalG, setShowG] = useState(false);
    const handleCloseG = () => setShowG(false);
    const handleShowG = () => setShowG(true); 
    
  return (
    <>
       <Carousel id="bio">
                <Carousel.Item className='hoverImg pointer'>
                    <img onClick={handleShowF}
                        className="carroussel-img" 
                        src= {denis}
                        alt="Denis Falardeau"
                    />
                <Carousel.Caption>
                    <h3 onClick={handleShowF}>Denis Falardeau</h3>
                    <p onClick={handleShowF}>trompette</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='hoverImg pointer'>
                    <img onClick={handleShowN}
                        className="carroussel-img"
                        src= {nicolas}
                        alt="Nicolas Leblanc"
                         /> 
                <Carousel.Caption>
                    <h3 onClick={handleShowN}>Nicolas Leblanc</h3>
                    <p onClick={handleShowN}>Trompette</p>
                </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className='hoverImg pointer'>
                    <img onClick={handleShowM}
                        className="carroussel-img"
                        src= {magellan}
                        alt="Magellan Strubbe"
                    />
                <Carousel.Caption>
                    <h3 onClick={handleShowM}>Magellan Strubbe</h3>
                    <p onClick={handleShowM}>Cor français</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='hoverImg pointer'>
                    <img onClick={handleShowJ}
                    className="carroussel-img"
                    src= {jonathan}
                    alt="Jonathan Moreau"
                    />
                <Carousel.Caption>
                    <h3 onClick={handleShowJ}>Jonathan Moreau</h3>
                    <p onClick={handleShowJ}>Trombone</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='hoverImg pointer'>
                    <img onClick={handleShowG}
                    className="carroussel-img"
                    src= {justin}
                    alt="Justin Gauthier"
                    />
                <Carousel.Caption>
                    <h3 onClick={handleShowG}>Justin Gauthier</h3>
                    <p onClick={handleShowG}>Trombone basse</p>
                </Carousel.Caption>
                </Carousel.Item>
        </Carousel>

        
        <Modal className="modalBlurTrp1" show={showModalN} onHide={handleCloseN} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='modal_background'>
            <Modal.Title>Biographie Nicolas Leblanc</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>Originaire de l’Estrie, c’est à l’école secondaire Louis Saint-Laurent que Nicolas découvre sa passion Nicolas pousse sa passion encore plus loin avec l’aide du trompettiste Jean Gervais. C’est à ce moment précis qu’il réalise que la musique doit faire partie de son quotidien.  Avec ce besoin de plus en plus grossissant, Nicolas poursuit ses études à l’université de Sherbrooke avec Frédéric Gagnon. Durant ses études et par la suite, Nicolas a fait partie de plusieurs ensembles musicaux tel l’ensemble à vents de Sherbrooke, l’orchestre de l’université de Sherbrooke, le Stage Band de l’université de Sherbrooke et bien d’autres. Nicolas est maintenant trompettiste à la pige pour plusieurs événements différents.  La transmission de sa passion pour la trompette est aussi une priorité pour lui. C’est dans cette optique qu’il donne des cours privés et des coachings dans plusieurs régions du Québec.  Ses temps libres sont régulièrement comblés par la musique, plus précisément pour jouer de la trompette ainsi que d'autres activités telles que l’ascension de montagne, le jardinage et bien entendu, une bonne bière entre amis.</Modal.Body>
        </Modal>

        <Modal className="modalBlurTrp1" show={showModalF} onHide={handleCloseF} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='modal_background'>
            <Modal.Title>Biographie Denis Falardeau</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>Venant d’une famille de mélomanes non-pratiquants, Denis Falardeau a naturellement choisi la trompette à travers les autres instruments disponibles pour l’enfant de 12 ans qu’il était. Il a développé un intérêt tôt pour le Big Band, ce qu’il l’a dirigé vers un parcours ancré dans le jazz. Suite à des cours avec le trompettiste Aron Doyle, il a poursuivi ses études à l’Université de Montréal sous l’aile de Ron DiLauro et pour une Maîtrise à l’Université Laval sous Richard Gagnon. Avec cette soif de jouer de la trompette, il joue dans différents ensembles jonglant du classique au jazz tel que le Big Band Sherbrooke, La Musique des Fusiliers de Sherbrooke et depuis tout récemment au sein d’Aeolus Quintette de l’Estrie. Que ce soit au bugle, au cornet ou tout simplement à la trompette, le plaisir qu’il a joué se fait sentir dans son souci du détail et de la recherche de style. En dehors du contexte musical, on le reconnaît à son tempérament actif. Il est friand de beaux paysages ainsi que d’une bonne bière en soirée (un IPA svp!!). Certains le caractériseront par un débit de voie quelque peu rapide, mais ce n’est qu’une cause à la fougue et l’excitation qui l’habite sur scène.</Modal.Body>
        </Modal>

        <Modal className="modalBlurHorn" show={showModalM} onHide={handleCloseM} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='modal_background'>
            <Modal.Title>Biographie Magellan Strubbe</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>Originaire de Montréal, Magellan a commencé son parcours musical par le chant choral à la Maîtrise des Petits-Chanteurs du Mont-Royal. Il rentre au Collège Notre-Dame en 2007, où il y découvre le cor français. Durant son parcours scolaire, il participe à trois tournées aux États-Unis avec l’Orchestre à Vent de Notre-Dame. À la fin de son secondaire, il décide de poursuivre ses études dans la musique, et rentre au cégep Vincent d’Indy en interprétation classique. Toujours passionné par le chant choral, il travaille comme renfort aux Petits-Chanteurs pour divers concerts et deux autres tournées. Il rejoint également plusieurs formations musicales, autant chorales qu’orchestrales dans la grande région de Montréal, jusqu’à ce qu’il parte compléter un baccalauréat en musique à l’Université de Sherbrooke en 2014. Il s’enrôle en 2017 dans la Première Réserve en tant que corniste pour la Musique des Fusiliers de Sherbrooke, où il y fait la rencontre des autres </Modal.Body>
        </Modal>

        <Modal className="modalBlurTrb" show={showModalJ} onHide={handleCloseJ} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='modal_background'>
            <Modal.Title>Biographie Jonthan Moreau</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>C’est à Montréal qu’il a découvert sa passion pour la musique. Muni d’un trombone, il étudie au Cégep Marie-Victorin avec  M. Patrice Richer et par la suite entreprend un Bac en interprétation classique à l’Université de Montréal avec M. David Martin. Durant ses études, il a pu se démarquer dans le big band de l’Université de Montréal sous la direction de Ron Di lauro, l’Orchestre Symphonique de Montréal sous la direction de Jean-François Rivest et dans l’ensemble de cuivre sous la direction de David Martin. Par la suite, il a décidé d’aller vivre à Sherbrooke et d’aller chercher des compétences en jazz et pop avec Serge Arsenault à l’Université de Sherbrooke, là où il entreprend un D.E.S.S. en entrepreneuriat de la musique. Avec les années, il a participé à plusieurs concerts avec des grands noms tels que Randy Breaker, Wayne Bergeron Maria Sheinder, Jacques Mauger, Jean-Nicolas Trottier et a aussi fait un concert conjoint avec l’Orchestre Symphonique de Montréal. Aujourd’hui, avec 13 années d’expérience d’être musicien pigiste et pédagogue dans plusieurs écoles primaires et secondaires, vous pouvez le voir jouer de son trombone dans le Sunny Jazz Band ainsi que dans la musique des fusiliers de Sherbrooke ou il occupe la position l’assistant directeur musical. Lorsqu’il ne fait pas de musique, vous pouvez le voir nager dans les piscines, faire de la planche à neige dans les montagnes ou boire de la bière entre deux parties de jeux vidéo avec des amis.</Modal.Body>
        </Modal>

        <Modal className="modalBlurTrbb" show={showModalG} onHide={handleCloseG} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='modal_background'>
            <Modal.Title>Biographie Justin Gauthier</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>Il est le cadet du groupe. Par cadet il veut dire le plus jeune, pas qu'il est dans les cadets.  En fait, il est musicien dans l'armée comme tromboniste, mais aussi au sein de l'EVS et de multiples ensembles classiques et jazz. En fait, il n'est pas que tromboniste, il joue aussi du piano, de la guitare et de la basse, ayant appris auprès de Muhammad Abdhul Al-Khabyyr et Martin Ringuette pour la pratique du trombone ainsi que Jean-François Martel comme professeur de basse au Cégep de Sherbrooke. C'est lors d'un stage musical dans la capitale de Cuba et de performances avec Julian Gutierrez qu'il ajoute le style cubain/latin dans son répertoire et langage, avec comme mentor Alejandro à la basse et Jorge au trombone. Il se diversifie en jouant entre autres avec Valaire, Martin Deschamps, Manane, Frédéric Demers et est tromboniste et claviériste au sein de Broadway FMSS. Il fait également des compositions et des l'arrangements pour le quintette et autres projet aussi diversifié les uns des autres.</Modal.Body>
        </Modal>

      )
  
    </>
  );
}


export default BioText;