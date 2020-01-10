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
    console.log(this.context.hives);
    return (
      <>
        <HeaderMain />
        <div className="hex-flex">
          <h1>Welcome to WeHive!</h1>
          {!hives.length && (
            <h3>
              Don't have any hives yet? Click on "Add Hive" to create one.
            </h3>
          )}
          <h4 className="user-welcome">
            To add members, go to the "Add members to hive" button. Set a
            password and share it with your friends!
            {/* <Hexagon className="right" /> */}
          </h4>
        </div>
        <h4>
          Have a password? Click on "Join Hive" to use and immediately begin
          collaborating with friends.
        </h4>
        <h4>Have fun!</h4>
      </>
    );
  }
}
