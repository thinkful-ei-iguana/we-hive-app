import React from "react";
import { Link } from "react-router-dom";
import { Button, Section } from "../../components/Utils/Utils";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <header role="banner">
        <div id="wrapper">
          <div id="landing-page-banner">
            <h1>WeHive</h1>
          </div>
          <div id="landing-page-transform">
            <h1>Achieve</h1>
          </div>
        </div>
        <h1>Together</h1>
      </header>
      <Link to="/register">
        <Button type="submit">Join the Hive</Button>
      </Link>
      <Section>
        <p>
          Studies show that people have higher success rates when collaborating
          on common goals with others....
        </p>
      </Section>
      <Section>
        <header>
          <h2>Focus on what matters</h2>
          <h3>With people who matter</h3>
        </header>
      </Section>
      <Section>
        <h2>How it Works</h2>
        <h3>Set Goals</h3>
        <h3>Join the Hive</h3>
        <h3>Achieve Together</h3>
      </Section>
      <Button type="submit">WeHive Demo</Button>
    </div>
  );
}
