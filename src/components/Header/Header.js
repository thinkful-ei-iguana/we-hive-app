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
          <Link to="/" className="log-button">
            <img src={Icon} alt="Hive icon" className="hive-icon" />
            <div className="logout" onClick={this.handleLogoutClick}>
              Logout
            </div>
          </Link>
        </div>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <div className="navigation">
          <Link to="/login" className="log-button">
            <img src={Icon} alt="Hive icon" className="hive-icon" />
            <div className="login">Login</div>
          </Link>
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
