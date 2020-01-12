import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Hexagon from "../../components/Hexagon/Hexagon";
import "./LandingPage.css";
import Hex from "../../images/Hexbg.png";

export default function LandingPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="pre-demo">
        <div className="wrapper">
          <Link to="/myhives">
            <h1>
              <img src={Hex} alt="hex graphic" />
              <span className="landing__tagline"></span>
              <div>Together</div>
            </h1>
          </Link>
        </div>
      </section>

      <section className="pre-demo">
        <div className="landing__content left">
          <div className="hdg">The research is in, and it says,</div>
          “The results showed that simply feeling like you’re part of a{" "}
          <span className="bold">team</span> of people working on a task makes
          people <span className="bold">more motivated</span> as they take on{" "}
          <span className="bold">challenges</span>."
        </div>
      </section>

      <section className="pre-demo">
        <div className="landing__content right">
          Research indicates that people who act collaboratively stick to their
          task 64% longer than those working alone. Groups of people working
          toward a common goal report{" "}
          <span className="bold">higher engagement levels</span>,{" "}
          <span className="bold">lower fatigue levels</span> and{" "}
          <span className="bold">higher success rates</span>.
        </div>
        <button className="ldg-btn" type="submit">
          WeHive Demo
        </button>
      </section>

      <section className="post-demo">
        <div className="landing__title">Focus on what matters</div>
        <h3 className="landing__subtitle">
          with{""}
          <span className="bold-text">people</span> who{" "}
          <span className="bold-text">matter</span>
        </h3>
      </section>
      <section className="post-demo">
        <h2 className="landing__title-exp">How it Works</h2>
        <div className="sub-wrapper">
          <h3 className="landing__subtitle">
            <div className="step-box">
              <p className="step">Set Goals</p>
              <Hexagon />
            </div>
            <div className="step-box">
              <p className="step">Invite Others</p>
              <Hexagon />
            </div>
            <div className="step-box">
              <p className="step">Achieve Together</p>
              <Hexagon />
            </div>
          </h3>
        </div>
        <Link to="/register">
          <button type="submit" className="ldg-btn">
            Join the Hive
          </button>
        </Link>
      </section>
    </>
  );
}
