import React from 'react';
import './sass/main.scss';
import sprite from "./images/sprite.svg"
import logo from "./images/logo.png"
import user from "./images/user.jpg"

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="trillo log" className="logo" />

        <form action="#" className="search">
          <input type="text" className="search__input" placeholder="Search Hotels" />
          <button className="search__button">
            <svg className="search__icon">
              <use xlinkHref={`${sprite}#icon-magnifying-glass`}></use>
            </svg>
          </button>
        </form>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref={`${sprite}#icon-bookmark`} />
            </svg>
            <span className="user-nav__notification">6</span>
          </div>

          <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
              <use xlinkHref={`${sprite}#icon-chat`} />
            </svg>
            <span className="user-nav__notification">6</span>
          </div>

          <div className="user-nav__user">
            <img src={user} alt="User" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Edwin</span>
          </div>
        </nav>

      </div>

      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-home`} />
                </svg>
                <span>Hotel</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-aircraft-take-off`} />
                </svg>
                <span>Flight</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-key`} />
                </svg>
                <span>Car rental</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-map`} />
                </svg>
                <span>Tours</span>
              </a>
            </li>
          </ul>

          <div className="legal">
            &copy; 2021 by trillo. All right reserved
          </div>
        </nav>

        <main className="hotel-view">
          hotel view
        </main>
      </div>
    </div>
  );
}

export default App;
