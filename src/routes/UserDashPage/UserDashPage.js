import React, { Component } from "react";
import { Link } from "react-router-dom";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import Hexagon from "../../components/Hexagon/Hexagon";

import "./UserDashPage.css";
export default class UserDashPage extends Component {
  static contextType = HiveContext;

  componentDidMount() {
    this.context.clearError();
    HiveApiService.getHives()
      .then(this.context.setHives)
      .catch(this.context.setError);
    HiveApiService.getUser()
      .then(this.context.setUser)
      .catch(this.context.setError);
  }

  render() {
    const { hives } = this.context;

    return (
      <>
        <div className="hex-flex">
          <h2 className="user-welcome-heading">Welcome to WeHive!</h2>
          {!hives.length && (
            <div className="dash-flex">
              <Link to="/create">
                <h3 className="dash-welcome">
                  You don't have any hives...yet. Add one now!
                </h3>
              </Link>
              <Link to="/create">
                <div className="dash-left">
                  <Hexagon />
                </div>
              </Link>
            </div>
          )}
          {!!hives.length && (
            <div className="dash-flex">
              <Link to="/create">
                <h4 className="dash-welcome">
                  Life is more fun with others. <br />
                  Create a hive <br />
                  Add members <br />
                  Set password and share with your friends!
                </h4>
              </Link>
              <Link to="/create">
                <div>
                  <Hexagon className="dash-hex" />
                </div>
              </Link>
            </div>
          )}
          <div className="dash-flex">
            <Link to="/join">
              <h4 className="dash-welcome">
                Have a password? Add code here and immediately begin
                collaborating with friends.
              </h4>
            </Link>
            <Link to="/join">
              <div>
                <Hexagon className="dash-hex" />
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
