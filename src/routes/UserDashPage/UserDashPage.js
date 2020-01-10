import React, { Component } from "react";
// import { Link } from "react-router-dom";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import Hexagon from "../../components/Hexagon/Hexagon";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import "./UserDashPage.css";
export default class UserDashPage extends Component {
  static contextType = HiveContext;

  componentDidMount() {
    this.context.clearError();
    HiveApiService.getHives()
      .then(this.context.setHives)
      .catch(this.context.setError);
  }
  render() {
    const { hives } = this.context;
    // const user = this.context.user;
    // if (!user) return null;

    return (
      <>
        <HeaderMain />
        <div className="hex-flex">
          <h2 className="user-welcome-heading">Welcome to WeHive!</h2>
          {!hives.length && (
            <h3 className="no-hives-msg">
              You don't have any hives...yet. Click on{" "}
              <span className="orange">Add Hive</span> to create one.
            </h3>
          )}
          <div className="user-flex">
            <h4 className="user-welcome-add hex">
              Life and work are more fun with others. To invite friends, select
              a hive and go to the{" "}
              <span className="orange">Add members to hive</span> button. Set a
              password and share it with your friends!
            </h4>
            <Hexagon className="right" />
            <div className="join-container">
              <h4 className="user-welcome-join">
                Have a password? Click on{" "}
                <span className="orange">Join Hive</span> to use and immediately
                begin collaborating with friends.
              </h4>
              <Hexagon className="left" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
