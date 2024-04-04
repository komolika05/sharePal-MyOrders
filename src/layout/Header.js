import React, { useEffect } from "react";
import "./Header.css";
import SharePalLogo from "./../images/Swnac-Ekiraya-Services-Pvt-Ltd-Sharepal-1.png";
import OrderList from "../orderList/OrderList";

const Header = () => {
  useEffect(() => {
    const input = document.querySelector(".search__input");
    const suggestion = document.querySelector(".suggestion");

    const showSuggestion = () => {
      suggestion.classList.add("active");
    };

    const hideSuggestion = () => {
      suggestion.classList.remove("active");
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-bar")) {
        hideSuggestion();
      }
    };

    input.addEventListener("focus", showSuggestion);
    document.addEventListener("click", handleClickOutside);

    return () => {
      input.removeEventListener("focus", showSuggestion);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <img src={SharePalLogo} className="logo" />
      </div>
      <nav>
        <div className="search-bar">
          <form className="search">
            <input
              type="search"
              className="search__input"
              name="search"
              placeholder="Search"
              required
            />
            <button className="search__btn">Search</button>
            <i className="ion-ios-search search__icon"></i>
          </form>
          <div className="suggestion">
            <div className="suggestion__content">
              <div className="suggestion__content-left-side">
                <h5>Popular Categories</h5>
                <ul>
                  <li>Camera</li>
                  <li>Shoes</li>
                  <li>Backpack</li>
                  <li>ps4</li>
                  <li>xbox</li>
                </ul>
              </div>
              <div className="suggestion__content-right-side">
                <h5>Popular Keywords</h5>
                <ul>
                  <li>Rent</li>
                  <li>Buy</li>
                  <li>Refurbished</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="orderButton-container">
        <button className="order-button">
          My orders
        </button>
      </div>
    </header>
  );
};

export default Header;
