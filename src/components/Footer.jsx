import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="tapas1">
        <div className="person1">
          <h2>
            Become A Member of Living Whole Online
            <br />
            <p>
              Join now to explore Integrative, Whole Health Strategies for
              self-care with our 1 free week trial.
            </p>
          </h2>
          <div className="btn">
            <button>Become A Member</button>
            <button>Gift A Member</button>
          </div>
        </div>
      </div>
      <div className="endpart">
        <h2>Living Whole Online Is A Program Created By</h2>
        <img
          src="https://livingwhole.sanpurple.shop/assets/images/international%20integreted%20logo.png"
          alt="dont know"
        />
        <h2 className="h2">
          Our Mission is to enhance your life with balance,
          <br />
          harmony and hope through Integrative Whole Health{" "}
        </h2>
        <p className="p">
          To Live Well
          <br />
          To Live with Hope
          <br />
          To Face And Overcome Challenges with Balance and Harmony
          <br />
          To Lead a Life of Happiness, Health and Abundance.{" "}
        </p>
      </div>

      <div className="lastitem">
        <h2>Designed and Developed bySanpurple INC</h2>
        <h2>All Right Reserved Design By Livingwhole</h2>
      </div>
    </>
  );
};

export default Footer;
