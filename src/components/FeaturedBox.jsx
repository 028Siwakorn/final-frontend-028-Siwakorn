import React from "react";
import phone from "../assets/Iphone16promax.png";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>IPHONE 16 PROMAX Available now!</span>
        </div>
        <div className="featured-name">
          PHONE & TABLET
          <br></br>
          <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            Welcome to Phone & Tablet Store, We have many Phone and Tablet That
            you can buy here. If you have Promblems or Question Contact us at
            ContactBox . I will help as soon as we see. Thank you!, For turst
            us.
          </p>
        </div>
        <div>
          <div className="featured-text-btn">
            <button className="btn">
              BUY NOW!<i className="uil uil-shopping-cart"></i>
            </button>
          </div>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/1st_firsttttt/"></a>
            <i className="uil uil-instagram"></i>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/siwakorn.kleebmek"></a>
            <i className="uil uil-facebook"></i>
          </div>
          <div className="icon">
            <a href="https://github.com/028Siwakorn"></a>
            <i className="uil uil-github-alt"></i>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={phone} alt="me" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBox;
