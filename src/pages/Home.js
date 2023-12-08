import React, { useState } from "react";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/ItemCard.css";
import "../styles/Testimony.css";
import "../styles/ServiceCard.css";
import "../styles/Enquiry.css";
import "../styles/ProofSection.css";
import HomeImg from "../assets/home-img.svg";
import About from "../assets/about-image.svg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";
import { itemData } from "../data/itemData";
import { serviceData } from "../data/serviceData";
import ServiceCard from "../components/ServiceCard";
import proofImg from "../assets/proof-img.svg";
import TestimonyImg from "../assets/testimony-img.svg";
import StarImg from "../assets/Star 1.svg";
import TestimonyPlant from "../assets/testimony-plant.svg";
import EnquiryImg from '../assets/enquiry-img.svg';
// import Registration from "./Registration";

const Home = () => {
  const [items, setItems] = useState(itemData);
  const [serviceItems, setServiceItems] = useState(serviceData);

  return (
    <div>
      <div
        className="home"
        style={{
          backgroundImage: `url(${HomeImg})`,
        }}
      >
        <div className="navbar-part">
          <Navbar />
        </div>

        <div className="header-part">
          <div className="header-para-1">
            <p className="para-1">Now anyone can farm</p>
          </div>
          <br />
          <div className="header-para-2">
            <p className="para-2">Easy Plant Kits for everyone</p>
          </div>
          <br />
          <div className="header-button">
            <button className="shop-now-button">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="recent-products">
        <h2>Our Recent Products</h2>
        <div className="list">
          {items.map((item, key) => {
            return (
              <>
                <ItemCard
                  key={key}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              </>
            );
          })}
        </div>
      </div>

      <div className="about">
        <div className="content-side">
          <h2>The world's 1st subscription based Indoor Plant Company</h2>
          <p>
            The world’s first subscription based Indoor Plant Company –
            Harvestay is revolutionising the way people buy and care for their
            plants. With this innovative model, customers can subscribe to a
            monthly delivery of a curated selection of healthy and vibrant
            plants that{" "}
          </p>
        </div>
        <div className="image-side">
          <img className="about-image" src={About} alt="" />
          <div className="outer-circle">
            <div className="inner-circle"></div>
          </div>
        </div>
      </div>

      <div className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          {serviceItems.map((serviceItem) => {
            return (
              <>
                <ServiceCard
                  name={serviceItem.name}
                  image={serviceItem.image}
                />
              </>
            );
          })}
        </div>
      </div>
<br />
      <div className="proof-section">
        <div className="set-1">
          <div className="proof-data">
            <h3>400+</h3>
            <h5>PRODUCTS</h5>
          </div>
          <div className="proof-data">
            <h3>400+</h3>
            <h5>PRODUCTS</h5>
          </div>
          <div className="proof-data">
            <h3>400+</h3>
            <h5>PRODUCTS</h5>
          </div>
        </div>

        <div className="proof-image">
          <img src={proofImg} alt="" />
        </div>

        <div className="set-2">
          <div className="proof-data">
            <h3>400+</h3>
            <h5>PRODUCTS</h5>
          </div>
          <div className="proof-data">
            <h3>400+</h3>
            <h5>PRODUCTS</h5>
          </div>
          <div className="proof-data">
            <h3>400+</h3>
            <h5>PRODUCTS</h5>
          </div>
        </div>
      </div>
<br />
      <div className="testimonials">
        <div className="right-side">
          <div className="content">
            <h2>Testimonials</h2>
            <p>
              A testimonial is an honest endorsement of your product or service
              that usually comes from a customer, colleague, or peer who has
              benefited from or experienced success as a result of the work you
              did for them.
            </p>
          </div>
          <div className="star-rating">
            <img src={StarImg} alt="" />
          </div>
          <div className="testimony-image">
            <img src={TestimonyImg} alt="" />
          </div>
        </div>
      </div>
<br />
      <div className="enquiry-section">
        <div className="enquiry-content">
          <p>
            Discover the convenience of online shopping & the opportunity of
            franchise ownership{" "}
          </p>
          <button class>Enquire Now</button>
        </div>
        <div className="enquiry-image">
          <img src={EnquiryImg} alt="" />
        </div>
      </div>

      <div className="footer-part">
        <Footer/>
      </div>

      {/* <Registration/> */}
    </div>
  );
};

export default Home;
