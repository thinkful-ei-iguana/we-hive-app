import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Section } from "../../components/Utils/Utils";

import Countdown from "../../components/Summary/Countdown";
import ProgressReport from "../../components/Summary/ProgressReport";
import HiveApiService from "../../services/hive-api-service";
import HiveContext from "../../context/HiveContext";

import "./UserDashPage.css";
export default class UserDashPage extends Component {
  static contextType = HiveContext;

  render() {
    const user = this.context.user;
    if (!user) return null;

    return <h3>Welcome {user.first_name}</h3>;
  }
}
