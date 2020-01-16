import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";
import Logo from "../../images/WeHiveNav.png";
export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/myhives";
    history.push(destination);
  };

  render() {
    return (
      <section className="LoginPage">
        <Link to="/">
          <img src={Logo} alt="logo" className="LoginPage__logo" />
        </Link>
        <h2 className="login-header">Log in</h2>
        <h4 className="user-link">
          Don't have an account?{" "}
          <Link to="/register" className="link">
            Sign up!
          </Link>
        </h4>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}
