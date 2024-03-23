import React from 'react';
import people from '../../assets/assets/people.png';
import ai from '../../assets/assets/ai.png';
import './header.css';

const Header = () => (
  <div className="mediator__header section__padding" id="home">
    <div className="mediator__header-content">
      <h1 className="gradient__text">"Maximize your influence with Mediater:</h1>
      <p>where collaboration meets success in influencer marketing</p>
      <div className="mediator__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="mediator__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="mediator__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;