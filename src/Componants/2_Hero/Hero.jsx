import React, { useEffect } from 'react';
import './hero.css';
import heroImage from '../../assets/header.png';
import ScrollReveal from 'scrollreveal';

export default function Hero() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    };

    
    ScrollReveal().reveal('.header__image img', {
      ...scrollRevealOption,
      origin: 'right',
    });
    ScrollReveal().reveal('.header__content h1', {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal('.header__content p', {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal('.header__content form', {
      ...scrollRevealOption,
      delay: 1500,
    });
    ScrollReveal().reveal('.header__content .bar', {
      ...scrollRevealOption,
      delay: 2000,
    });
    ScrollReveal().reveal('.header__image__card', {
      duration: 1000,
      interval: 500,
      delay: 2500,
    });
  }, []); 
  return (
    <div className="header__container">
      <div className="header__image">
        <div className="header__image__card header__image__card-1">
          <span><i className="ri-key-line"></i></span>
          Hotel Booking
        </div>
        <div className="header__image__card header__image__card-2">
          <span><i className="ri-passport-line"></i></span>
          Flight Tickets
        </div>
        <div className="header__image__card header__image__card-3">
          <span><i className="ri-map-2-line"></i></span>
          Local Events
        </div>
        <div className="header__image__card header__image__card-4">
          <span><i className="ri-guide-line"></i></span>
          Tour Guide
        </div>
        <img src={heroImage} alt="header" />
      </div>
      <div className="header__content">
        <h1>LET'S GO!<br />THE <span>ADVENTURE</span> IS WAITING FOR YOU</h1>
        <p>
          Embark on Your Journey Today and Discover Uncharted Wonders Around the
          World - Your Adventure Awaits with Exciting Experiences, Unforgettable
          Memories, and Endless Opportunities
        </p>
        <form action="/">
          <div className="input__row">
            <div className="input__group">
              <h5>Destination</h5>
              <div>
                <span><i className="ri-map-pin-line"></i></span>
                <input type="text" placeholder="Morocco, Oujda" />
              </div>
            </div>
            <div className="input__group">
              <h5>Date</h5>
              <div>
                <span><i className="ri-calendar-2-line"></i></span>
                <input type="text" placeholder="17 July 2024" />
              </div>
            </div>
          </div>
          <button type="submit">Search</button>
        </form>
        <div className="bar">
          Copyright © 2024 Web Design Mastery. All rights reserved.
        </div>
      </div>
    </div>
  );
}
