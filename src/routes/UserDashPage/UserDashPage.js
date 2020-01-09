import React, { Component } from "react";
// import { Link } from "react-router-dom";

import HiveContext from "../../context/HiveContext";

import "./UserDashPage.css";
export default class UserDashPage extends Component {
  static contextType = HiveContext;

  render() {
    const user = this.context.user;
    if (!user) return null;

    return (
      <>
        <h2>Welcome to WeHive!</h2>
        <h4>
          Working toward common goals makes anything possible. Don't have any
          hives yet? Click on Add Hive to create a hive, then click on Add
          Members to Hive to add a password. Share that password with anyone who
          wants to join your hive. Have a password? Click on Join Hive to enter.
          Have fun!
        </h4>
      </>
    );
  }
}
