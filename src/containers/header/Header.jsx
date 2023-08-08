import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section-padding" id="home">
      <div className="header-content">
        <h1 className="gradient-text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-input">
          <input type="text" placeholder="Your email address"></input>
          <button>Get Started</button>
        </div>
        <div className="header-peoples">
          <img src={people} alt="peoples"></img>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3-image">
        <img src={ai} alt="ai image"></img>
      </div>
    </div>
  );
};

export default Header;
