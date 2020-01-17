import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import Icon from "../../images/NavIcon.png";

import "./Header.css";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <div className="navigation">
          <Link to="/" className="log-button" onClick={this.handleLogoutClick}>
            <img src={Icon} alt="Hive icon" className="hive-icon" />
            <div className="logout">Logout</div>
          </Link>
        </div>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <div className="navigation">
          <div className="nav__not-logged-in">
            <img src={Icon} alt="Hive icon" className="hive-icon" />

            <Link to="/login" className="log-button">
              <div className="login">Log in</div>
            </Link>
            <Link to="/register" className="log-button">
              <div className="register">Register</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="Header">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </>
    );
  }
}
