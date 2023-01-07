import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export const Home = () => {
  return (
    <div>
      <main className="main-container">
        <div className="div-link">
          <Link className="nav-link" to="/credit-card">
            Credit Card
          </Link>
        </div>
        <div className="div-link">
          <Link className="nav-link" to="/rating">
            Rating
          </Link>
        </div>
        <div className="div-link">
          <Link className="nav-link" to="/weather-app">
            Weather App
          </Link>
        </div>
        <div className="div-link">
          <Link className="nav-link" to="/accordion">
            Accordion
          </Link>
        </div>
        <div className="div-link">
          <Link className="nav-link" to="/carousel">
            Carousel
          </Link>
        </div>
        <div className="div-link">
          <Link className="nav-link" to="/dark-mode">
            Dark Mode
          </Link>
        </div>
        <div className="div-link">
          <Link className="nav-link" to="/load-more">
            Load More
          </Link>
        </div>
      </main>
    </div>
  );
};
