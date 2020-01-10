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
      <section>
        <div className="wrapper">
          <h1>
            <span className="landing__tagline"></span>
          </h1>
          <h1>Together</h1>
        </div>
      </section>

      <section>
        <div className="landing__content">The research is in, and it says,</div>
        <div className="landing__content">
          “The results showed that simply feeling like you’re part of a{" "}
          <span className="bold">team</span> of people working on a task makes
          people <span className="bold">more motivated</span> as they take on{" "}
          <span className="bold">challenges</span>."
        </div>
      </section>

      <section>
        <div className="landing__content">
          Research indicates that people who act collaboratively stick to their
          task 64% longer than those working alone. Groups of people working
          toward a common goal report{" "}
          <span className="bold">higher engagement levels</span>,{" "}
          <span className="bold">lower fatigue levels</span> and{" "}
          <span className="bold">higher success rates</span>.
        </div>
      </section>

      <Button type="submit">WeHive Demo</Button>

      <section>
        <h2 className="landing__title">Focus on what matters</h2>
        <h3 className="landing__subtitle">With people who matter</h3>
      </section>
      <section>
        <h2 className="landing__title">How it Works</h2>
        <h3 className="landing__subtitle">
          <span className="sub-span"></span>
        </h3>
      </section>
      <Link to="/register">
        <Button type="submit">Join the Hive</Button>
      </Link>
    </>
  );
}
