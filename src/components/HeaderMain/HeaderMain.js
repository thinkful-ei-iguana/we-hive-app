import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";

export default class HeaderMain extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="HeaderMain__logged-in">
        <Link onClick={this.handleLogoutClick} to="/"></Link>
      </div>
    );
  }

  // renderLoginLink() {
  //   return (
  //     <div className="Header__not-logged-in">
  //       <Link to="/login">Log in</Link>
  //       <Link to="/register">Register</Link>
  //     </div>
  //   );
  // }

  render() {
    return <>{TokenService.hasAuthToken() && this.renderLogoutLink()}</>;
  }
}
