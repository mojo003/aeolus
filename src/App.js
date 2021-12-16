import React from 'react';
import Header from './components/header';
import './App.css';
import Menu from './components/nav.js';
import Presentation from './components/presentation.js';
import Bio from './components/bio.js';

function App() {
  return (
    <div >
      <Header />
      <Menu />
      <Presentation />
      <Bio />
    </div>
  );
}

export default App;
