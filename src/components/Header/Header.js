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
        <div class="navigation">
          <a href="/" className="log-button">
            <img src={Icon} alt="Hive icon" className="hive-icon" />
            <div className="logout">
              <Link onClick={this.handleLogoutClick} to="/">
                Logout
              </Link>
            </div>
          </a>
        </div>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <div class="navigation">
          <a href="/login" className="log-button">
            <img src={Icon} alt="Hive icon" className="hive-icon" />
            <div className="login">
              <Link to="/login">Log in</Link>
              <Link to="/register">Register</Link>
            </div>
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
