import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./HeaderMain.css";
export default class HeaderMain extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="HeaderMain__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          <div>Logout</div>
        </Link>
      </div>
    );
  }

  render() {
    return <>{TokenService.hasAuthToken() && this.renderLogoutLink()}</>;
  }
}
