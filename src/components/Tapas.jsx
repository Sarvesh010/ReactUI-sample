import React from "react";
import "./Tapas.css";

const Tapas = () => {
  return (
    <>
      <div className="image">
        <img
          src="https://livingwhole.sanpurple.shop/assets/images/logo-livingwhole.jpg"
          alt="log-living whole"
        />
      </div>
      <div className="tapas">
        <h2>Tapas Life Courses For Healing</h2>
        <p>
          If you feel overwhelmed by your life and responsibilities, you may
          feel that your “plate is too full” or you are holding too much in your
          hands. “Tapas” is a Spanish word describing small plates of food. We
          have created Tapas for Life Courses to help you “unload your plate”
          and ease the burden in your hands. Each Tapas for Life Course consists
          of some recorded, on-demand programs that you can access when you
          wish, and optional Live With Facilitator programs.
        </p>

        <div className="box">
          <h3>Benefits of Tapas</h3>
          <h4>
            BOOST YOUR IMMUNE SYSTEM &nbsp;|&nbsp; DECREASE INFLAMMATION
            &nbsp;|&nbsp; INCREASE YOUR ENERGY &nbsp;|&nbsp; INCREASE YOUR
            ENERGY &nbsp;|&nbsp; DECREASE STRESS &nbsp;|&nbsp; PROMOTE HEALING
          </h4>
          <button>Watch video</button>
        </div>

        <div className="person">
          <img
            src="https://livingwhole.sanpurple.shop/assets/images/Meet-Kathryn-Hayward.png"
            alt=" Kathryn Hayward, MD"
          />
          <h2>
            Meet Kathryn Hayward, MD <br />
            <p> Kathryn Hayward, MD believes in Integrative Whole Health. </p>
          </h2>
        </div>
        <div className="info-p">
          <p>
            With expert, visionary colleagues, she co-founded and developed
            International Integrators and Living Whole Online. She marvels at
            the power of collective action to manifest change. After serving for
            20 years as a primary care physician at the Massachusetts General
            Hospital and Harvard Medical School, she now devotes herself to
            globally expanding the approach to collaborative education through
            Living Whole programs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tapas;
