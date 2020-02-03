import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.css";
import Login from "../../images/WeHiveUser.png";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
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

  handleDemoLogin = event => {
    event.preventDefault();
    this.setState({ error: null });

    AuthApiService.postLogin({
      user_email: "web@gmail.com",
      password: "Password1!"
    })

      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        this.handleLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <section className="LoginPage">
        <Link to="/">
          <img src={Login} alt="logo" className="LoginPage__logo" />
        </Link>
        <h2 className="login-header">Log in</h2>
        <h4 className="user-link">
          Don't have an account?{" "}
          <Link to="/register" className="link">
            Sign up!
          </Link>
          <p>
            Want to see more? Log in as a{" "}
            <Link to="/myhives" className="link" onClick={this.handleDemoLogin}>
              demo user
            </Link>
            .
          </p>
        </h4>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}
