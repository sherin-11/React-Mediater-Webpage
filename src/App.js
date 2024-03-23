import React from 'react';
import { Blog, Possibility, Features, WhatMediator, Header, Bottom } from './containers'; // Make sure 'Footer' is capitalized
import { Cta, Navbar } from './components';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gardient__bg'>
        <Navbar />
        <Header />
      </div>
     
      <WhatMediator />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Bottom /> 
    </div>
  );
};

export default App;
