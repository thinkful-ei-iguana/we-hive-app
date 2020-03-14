import React, { Component } from "react";
import { Link } from "react-router-dom";
import HiveContext from "../../context/HiveContext";
import Hexagon from "../../components/Hexagon/Hexagon";
import "./LandingPage.css";
import Hex from "../../images/Hexbg.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default class LandingPage extends Component {
  static contextType = HiveContext;

  render() {
    const demoUser = {
      user_email: "demo@me.com",
      password: "$2a$12$8zTUtyLYgtn4hjqnKZ.isepUhdgxYhRRBGANpeTsEJLPTZFNLIw1."
    };
    return (
      <>
        <section className="pre-demo">
          <div className="wrapper">
            <img src={Hex} className="hex-graphic" alt="hex graphic" />
            <Link to="/myhives">
              <h1>
                <p className="landing__tagline"></p>
                <div>Together</div>
              </h1>
            </Link>
            <a href="#more">
              <div className="chevron-block" id="more">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="chevron large"
                />
              </div>
            </a>
          </div>
        </section>

        <section className="taglines">
          <div className="landing__content">
            <div className="left">
              <div className="hdg">The research is in, and it says,</div>
              “The results showed that simply feeling like you’re part of a{" "}
              <span className="bold">team</span> of people working on a task
              makes people <span className="bold">more motivated</span> as they
              take on <span className="bold">challenges</span>."
            </div>

            <div className="right">
              Research indicates that people who act collaboratively stick to
              their task 64% longer than those working alone. Groups of people
              working toward a common goal report{" "}
              <span className="bold">higher engagement levels</span>,{" "}
              <span className="bold">lower fatigue levels</span> and{" "}
              <span className="bold">higher success rates</span>.
            </div>
          </div>
          <Link to="/myhives">
            <button
              type="submit"
              className="ldg-btn"
              onClick={() => this.context.setUser(demoUser)}
            >
              View Demo
            </button>
          </Link>
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
            <h3 className="landing__subtitle hex-exp">
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
          <Link to="/myhives">
            <button type="submit" className="ldg-btn">
              Join the Hive
            </button>
          </Link>
        </section>
      </>
    );
  }
}
