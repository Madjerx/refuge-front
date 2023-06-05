import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/va_logo.png";
import dogIcon from "../../assets/dog-svgrepo-com.svg";
import catIcon from "../../assets/cat-svgrepo-com.svg";
import nacIcon from "../../assets/rabbit-svgrepo-com.svg";

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
  const [subMenu, toSubMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <span className="nav__logo">Vie Animale</span>
        {/* <img className="logo" src={Logo} alt="Vie Animale Refuge Logo" /> */}
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul
            className={subMenu ? "nav__list hide_menu grid" : "nav__list grid"}
          >
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
            <li className="nav__item pointer">
              <div onClick={() => toSubMenu(true)} className="nav__link">
                <i className="bx bxs-cat bx-tada nav__icon"></i>Nos Animaux
              </div>
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
          <ul
            className={
              subMenu ? "sub__nav__list grid" : "sub__nav__list hide_menu grid"
            }
          >
            
            <li className="nav__item">
              <Link
                to="/"
                onClick={() => {
                  showMenu(!Toggle);
                  toSubMenu(!subMenu);
                }}
                className={path === "/xx" ? "nav__link active-link" : "nav__link"}
              >
                <img src={dogIcon} alt="dog-icon-menu" className="animal_icon" />
                Les Chiens
              </Link>
            </li>
            <li className="nav__item">
              <Link
                onClick={() => {
                  showMenu(!Toggle);
                  toSubMenu(!subMenu);
                }}
                to="/nos-animaux-au-refuge"
                className={
                  path === "/xx"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <img src={catIcon} alt="dog-icon-menu" className="animal_icon" />
                Les Chats
              </Link>
            </li>
            <li className="nav__item">
              <Link
                onClick={() => {
                  showMenu(!Toggle);
                  toSubMenu(!subMenu);
                }}
                to="/aider-notre-association"
                className={
                  path === "/xx"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <img src={nacIcon} alt="dog-icon-menu" className="animal_icon" />
                Les NAC
              </Link>
            </li>
            <li className="nav__item back_from_sub_menu pointer">
              <div
                onClick={() => {
                  toSubMenu(!subMenu);
                }}
                className="nav__link back_link"
              >
                <i class='bx bx-arrow-back'></i><span>Menu Principal</span>
              </div>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => {
              showMenu(!Toggle);
              toSubMenu(!subMenu);
            }}
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
