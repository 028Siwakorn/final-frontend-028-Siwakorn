import React from "react";
import phone1 from "../assets/iphone-16-pro.png";
import ipad from "../assets/ipad.png";
import ipadair from "../assets/ipad air.png";
const ProjectsBox = () => {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Recommended Phone&Tablet</h1>
        <span>Follow instruction for more</span>
      </div>
      <div className="project-container">
        <div className="project-box">
          <div className="popular-image">
            <div className="image">
              <img src={phone1} alt="Iphone 16" />
            </div>
          </div>

          <h3>IPHONE 16 PROMAX 256 GB</h3>
          <label>$1,399</label>
          <br></br>
          <button className="btn">BUY</button>
        </div>
        <div className="project-box">
          <div className="popular-image">
            <div className="image">
              <img src={ipad} alt="Ipad pro" />
            </div>
          </div>
          <h3>iPAD PRO 512 GB</h3>
          <label>$1,869</label>
          <br></br>
          <button className="btn">BUY</button>
        </div>
        <div className="project-box">
          <div className="popular-image">
            <div className="image">
              <img src={ipadair} alt="Ipad air" />
            </div>
          </div>
          <h3>iPAD AIR</h3>
          <label>$599</label>
          <br></br>
          <button className="btn">BUY</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
