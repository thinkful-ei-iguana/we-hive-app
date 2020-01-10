import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import Header from "../../components/Header/Header";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="pre-demo">
        <div className="wrapper">
          <h1>
            <span className="landing__tagline"></span>
            <h1>Together</h1>
          </h1>
        </div>
      </section>

      <section className="pre-demo">
        <div className="landing__content left">
          <span className="hdg">The research is in, and it says,</span>
          <br />
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
      </section>

      <Button className="ldg-btn" type="submit">
        WeHive Demo
      </Button>

      <section className="post-demo">
        <h2 className="landing__title">Focus on what matters</h2>
        <h3 className="landing__subtitle">With people who matter</h3>
      </section>
      <section className="exp">
        <h2 className="landing__title-exp">How it Works</h2>
        <div className="sub-wrapper">
          <h3 className="landing__subtitle">
            <h3>Set Goals</h3>
            <h3>Join the Hive</h3>
            <h3>Achieve Together</h3>
          </h3>
        </div>
      </section>
      <Link to="/register">
        <Button type="submit" className="ldg-btn">
          Join the Hive
        </Button>
      </Link>
    </>
  );
}
