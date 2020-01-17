import React, { Component } from "react";
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
          <a href="/" className="log-button">
            <img src={Icon} alt="Hive icon" className="hive-icon" />
            <div className="logout" onClick={this.handleLogoutClick}>
              Logout
            </div>
          </a>
        </div>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <div className="navigation">
          <a href="/login" className="log-button">
            <img src={Icon} alt="Hive icon" className="hive-icon" />
            <div className="login">Login</div>
          </a>
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
