import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logoImg.svg";
import AccountIcon from '../assets/account-icon.svg';
import ShoppingCartIcon from '../assets/cart-icon.svg';
import SearchIcon from '../assets/search-icon.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-section">
        <img className="logo-img" src={Logo} alt="" />
      </div>

      <div className="navbar-links">
        <div className="home-link">
          <p>Home</p>
        </div>

        <div className="about-link">
          <p>About Us</p>
        </div>

        <div className="service-link">
          <p>Services</p>
        </div>

        <div className="shop-link">
          <p>Shop</p>
        </div>

        <div className="contact-link">
          <p>Contact Us</p>
        </div>
      </div>

      <div className="pic-link">
        <div className="search-link">
          <img src={SearchIcon} alt="" />
        </div>
        <div className="account-link">
          <img src={AccountIcon} alt="" />
        </div>
        <div className="cart-link">
          <img src={ShoppingCartIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
