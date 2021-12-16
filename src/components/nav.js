import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () =>{
    return (
     <div className='App tc f3 nav_bar'>
        <Navbar bg='dark' variant="dark" expand='lg' fixed="top" >
          <Navbar.Brand href="#home">Aeolus</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <Nav.Link href="#home">Biographie</Nav.Link>
              <Nav.Link href="#link">Calendrier</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Menu;