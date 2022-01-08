import React from 'react';
import Header from './components/header';
import './App.css';
import Menu from './components/nav.js';
import Presentation from './components/presentation.js';
import BioText from './components/bio_text';
import Form from './components/contact.js';

function App() {
  return (
    <div >
      <Header />
      <Menu />
      <Presentation />
      <BioText />
      <Form />
    </div>
  );
}

export default App;
