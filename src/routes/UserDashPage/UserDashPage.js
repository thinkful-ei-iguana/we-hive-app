import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Utils/Utils";

import GoalSummary from "../../components/Summary/GoalSummary";
import HiveSummary from "../../components/Summary/HiveSummary";
import Countdown from "../../components/Summary/Countdown";
import ProgressReport from "../../components/Summary/ProgressReport";

import "./UserDashPage.css";
export default class UserDashPage extends Component {
  render() {
    return (
      <Section className="UserDashPage">
        <GoalSummary></GoalSummary>
        <HiveSummary></HiveSummary>
        <Countdown></Countdown>
        <ProgressReport></ProgressReport>
      </Section>
    );
  }
}
