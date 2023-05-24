import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/va_logo.png";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log("path = ", path);
  /* Change background Header */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /* Activate menu */
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <span className="nav__logo">Vie Animale</span>
        {/* <img className="logo" src={Logo} alt="Vie Animale Logo" /> */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="/"
                onClick={() => showMenu(false)}
                className={path === "/" ? "nav__link active-link" : "nav__link"}
              >
                <i className="bx bxs-home nav__icon"></i>Le Refuge
              </Link>
            </li>
            {/* <li className="nav__item">
              <Link
                to="/"
                className={
                  path === "/#" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-house-user nav__icon"></i> Le Refuge
              </Link>
            </li> */}
            <li className="nav__item">
              <Link
                onClick={() => showMenu(false)}
                to="/nos-animaux-au-refuge"
                className={
                  path === "/nos-animaux-au-refuge"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="bx bxs-cat bx-tada nav__icon"></i>Nos Animaux
              </Link>
            </li>
            <li className="nav__item">
              <Link
                onClick={() => showMenu(false)}
                to="/aider-notre-association"
                className={
                  path === "/aider-notre-association"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="bx bxs-donate-heart nav__icon"></i> Nous Aider
              </Link>
            </li>
            <li className="nav__item">
              <Link
                onClick={() => showMenu(false)}
                to="/contact"
                className={
                  path === "/contact" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="bx bxs-chat nav__icon"></i> Contact
              </Link>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="bx bx-menu-alt-right toggle__mobile__menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
