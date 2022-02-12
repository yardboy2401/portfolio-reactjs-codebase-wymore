import './App.css';
import Navigation from './Navigation';
import Header from './Header';
import Project from './Project';
import Footer from './Footer';
import Contact from './Contact';  
import React, { useState } from 'react';

function App() {

  const handleClick = (page) => {
    setState(page)
  }
  
  const [ state, setState ] = useState('Header')

  const whichState = () => {
    if(state === 'Header') {
      return <Header />
    } else if (state === 'Contact') {
      return <Contact />
    } else if (state === 'Project') {
      return <Project />
    }
  }

  return (
    <div className="App">
      
      <Navigation handleClick={handleClick} />
      {whichState()}
      <Footer />
      
    </div>
  );
}

export default App;
