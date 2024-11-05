import React from "react";
import ipad from "../assets/ipad.png";
import iphone1 from "../assets/iphone-16-pro.png";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Us</h1>
        <span>Follow instruction for more</span>
      </div>
      <div className="row">
        {/** About me */}
        <div className="col">
          <div className="about-info">
            <h3>About us</h3>
            <p>
              We are appreciate, All new or old user We are happy to see you
              love our website and Hope you enjoy your desicion to buy some
              Phone & Tablet here <br></br>Thank you so much!
              <i className="uil uil-smile-beam"></i>
            </p>
          </div>
        </div>

        {/** Image */}
        <div className="about-image">
          <div className="image">
            <img src={iphone1} alt="me" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="about-image">
          <div className="image">
            <img src={ipad} alt="me" />
          </div>
        </div>
        {/** About me */}
        <div className="col">
          <div className="about-info">
            <h3>Hope you Enjoy !!!</h3>
            <p>
              We have so much Iphone & Tablet. You can scroll down and see stuff
              <br></br>Hope you have a Beatiful Day!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
