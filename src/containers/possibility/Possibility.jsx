import React from 'react';
import possibilityImage from '../../assets/assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="mediator__possibility section__padding" id="possibility">
    <div className="mediator__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="mediator__possibility-content">
      <h4>"Ready to revolutionize your influencer game?</h4>
      <h1 className="gradient__text">Join us <br /> and dive into limitless possibilities!</h1>
      <p>"Discover endless possibilities with Mediater: revolutionizing influencer marketing for brands, creators, and businesses."</p>
    </div>
  </div>
);

export default Possibility;