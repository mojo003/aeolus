//import React

import '../index.css';
import React, { useState } from "react";


//Bootstrap import
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';

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
       <Carousel>
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
                    <p onClick={handleShowM}>Cor fran??ais</p>
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
            <Modal.Body className='modalBody'>Originaire de l???Estrie, c???est ?? l?????cole secondaire Louis Saint-Laurent que Nicolas d??couvre sa passion Nicolas pousse sa passion encore plus loin avec l???aide du trompettiste Jean Gervais. C???est ?? ce moment pr??cis qu???il r??alise que la musique doit faire partie de son quotidien.  Avec ce besoin de plus en plus grossissant, Nicolas poursuit ses ??tudes ?? l???universit?? de Sherbrooke avec Fr??d??ric Gagnon. Durant ses ??tudes et par la suite, Nicolas a fait partie de plusieurs ensembles musicaux tel l???ensemble ?? vents de Sherbrooke, l???orchestre de l???universit?? de Sherbrooke, le Stage Band de l???universit?? de Sherbrooke et bien d???autres. Nicolas est maintenant trompettiste ?? la pige pour plusieurs ??v??nements diff??rents.  La transmission de sa passion pour la trompette est aussi une priorit?? pour lui. C???est dans cette optique qu???il donne des cours priv??s et des coachings dans plusieurs r??gions du Qu??bec.  Ses temps libres sont r??guli??rement combl??s par la musique, plus pr??cis??ment pour jouer de la trompette ainsi que d'autres activit??s telles que l???ascension de montagne, le jardinage et bien entendu, une bonne bi??re entre amis.</Modal.Body>
        </Modal>

        <Modal className="modalBlurTrp1" show={showModalF} onHide={handleCloseF} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='modal_background'>
            <Modal.Title>Biographie Denis Falardeau</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>Venant d???une famille de m??lomanes non-pratiquants, Denis Falardeau a naturellement choisi la trompette ?? travers les autres instruments disponibles pour l???enfant de 12 ans qu???il ??tait. Il a d??velopp?? un int??r??t t??t pour le Big Band, ce qu???il l???a dirig?? vers un parcours ancr?? dans le jazz. Suite ?? des cours avec le trompettiste Aron Doyle, il a poursuivi ses ??tudes ?? l???Universit?? de Montr??al sous l???aile de Ron DiLauro et pour une Ma??trise ?? l???Universit?? Laval sous Richard Gagnon. Avec cette soif de jouer de la trompette, il joue dans diff??rents ensembles jonglant du classique au jazz tel que le Big Band Sherbrooke, La Musique des Fusiliers de Sherbrooke et depuis tout r??cemment au sein d???Aeolus Quintette de l???Estrie. Que ce soit au bugle, au cornet ou tout simplement ?? la trompette, le plaisir qu???il a jou?? se fait sentir dans son souci du d??tail et de la recherche de style. En dehors du contexte musical, on le reconna??t ?? son temp??rament actif. Il est friand de beaux paysages ainsi que d???une bonne bi??re en soir??e (un IPA svp!!). Certains le caract??riseront par un d??bit de voie quelque peu rapide, mais ce n???est qu???une cause ?? la fougue et l???excitation qui l???habite sur sc??ne.</Modal.Body>
        </Modal>

        <Modal className="modalBlurHorn" show={showModalM} onHide={handleCloseM} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='modal_background'>
            <Modal.Title>Biographie Magellan Strubbe</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>Originaire de Montr??al, Magellan a commenc?? son parcours musical par le chant choral ?? la Ma??trise des Petits-Chanteurs du Mont-Royal. Il rentre au Coll??ge Notre-Dame en 2007, o?? il y d??couvre le cor fran??ais. Durant son parcours scolaire, il participe ?? trois tourn??es aux ??tats-Unis avec l???Orchestre ?? Vent de Notre-Dame. ?? la fin de son secondaire, il d??cide de poursuivre ses ??tudes dans la musique, et rentre au c??gep Vincent d???Indy en interpr??tation classique. Toujours passionn?? par le chant choral, il travaille comme renfort aux Petits-Chanteurs pour divers concerts et deux autres tourn??es. Il rejoint ??galement plusieurs formations musicales, autant chorales qu???orchestrales dans la grande r??gion de Montr??al, jusqu????? ce qu???il parte compl??ter un baccalaur??at en musique ?? l???Universit?? de Sherbrooke en 2014. Il s???enr??le en 2017 dans la Premi??re R??serve en tant que corniste pour la Musique des Fusiliers de Sherbrooke, o?? il y fait la rencontre des autres </Modal.Body>
        </Modal>

        <Modal className="modalBlurTrb" show={showModalJ} onHide={handleCloseJ} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='modal_background'>
            <Modal.Title>Biographie Jonthan Moreau</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>C???est ?? Montr??al qu???il a d??couvert sa passion pour la musique. Muni d???un trombone, il ??tudie au C??gep Marie-Victorin avec  M. Patrice Richer et par la suite entreprend un Bac en interpr??tation classique ?? l???Universit?? de Montr??al avec M. David Martin. Durant ses ??tudes, il a pu se d??marquer dans le big band de l???Universit?? de Montr??al sous la direction de Ron Di lauro, l???Orchestre Symphonique de Montr??al sous la direction de Jean-Fran??ois Rivest et dans l???ensemble de cuivre sous la direction de David Martin. Par la suite, il a d??cid?? d???aller vivre ?? Sherbrooke et d???aller chercher des comp??tences en jazz et pop avec Serge Arsenault ?? l???Universit?? de Sherbrooke, l?? o?? il entreprend un D.E.S.S. en entrepreneuriat de la musique. Avec les ann??es, il a particip?? ?? plusieurs concerts avec des grands noms tels que Randy Breaker, Wayne Bergeron Maria Sheinder, Jacques Mauger, Jean-Nicolas Trottier et a aussi fait un concert conjoint avec l???Orchestre Symphonique de Montr??al. Aujourd???hui, avec 13 ann??es d???exp??rience d?????tre musicien pigiste et p??dagogue dans plusieurs ??coles primaires et secondaires, vous pouvez le voir jouer de son trombone dans le Sunny Jazz Band ainsi que dans la musique des fusiliers de Sherbrooke ou il occupe la position l???assistant directeur musical. Lorsqu???il ne fait pas de musique, vous pouvez le voir nager dans les piscines, faire de la planche ?? neige dans les montagnes ou boire de la bi??re entre deux parties de jeux vid??o avec des amis.</Modal.Body>
        </Modal>

        <Modal className="modalBlurTrbb" show={showModalG} onHide={handleCloseG} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className='modal_background'>
            <Modal.Title>Biographie Justin Gauthier</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody'>Il est le cadet du groupe. Par cadet il veut dire le plus jeune, pas qu'il est dans les cadets.  En fait, il est musicien dans l'arm??e comme tromboniste, mais aussi au sein de l'EVS et de multiples ensembles classiques et jazz. En fait, il n'est pas que tromboniste, il joue aussi du piano, de la guitare et de la basse, ayant appris aupr??s de Muhammad Abdhul Al-Khabyyr et Martin Ringuette pour la pratique du trombone ainsi que Jean-Fran??ois Martel comme professeur de basse au C??gep de Sherbrooke. C'est lors d'un stage musical dans la capitale de Cuba et de performances avec Julian Gutierrez qu'il ajoute le style cubain/latin dans son r??pertoire et langage, avec comme mentor Alejandro ?? la basse et Jorge au trombone. Il se diversifie en jouant entre autres avec Valaire, Martin Deschamps, Manane, Fr??d??ric Demers et est tromboniste et clavi??riste au sein de Broadway FMSS. Il fait ??galement des compositions et des l'arrangements pour le quintette et autres projet aussi diversifi?? les uns des autres.</Modal.Body>
        </Modal>

      )
  
    </>
  );
}


export default BioText;