import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /* Change background Header */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /* Activate menu */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <span className="nav__logo">
          Logo
        </span>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Accueil
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> Le Refuge
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Animaux à adopter
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#exp"
                onClick={() => setActiveNav("#exp")}
                className={
                  activeNav === "#exp" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Nous aider
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#work"
                onClick={() => setActiveNav("#work")}
                className={
                  activeNav === "#work" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Contact
              </a>
            </li>
            
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
