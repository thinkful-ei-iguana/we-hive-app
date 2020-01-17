import React, { Component } from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Logo from "../../images/WeHiveUser.png";
import "./RegistrationPage.css";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <section className="RegistrationPage">
        <Link to="/">
          <img src={Logo} alt="logo" className="RegistrationPage__logo" />
        </Link>
        <h2 className="tagline">Connections > success.</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
        <h4 className="user-link">
          Already a member?{" "}
          <Link to="/login" className="link">
            Sign in!
          </Link>
        </h4>
      </section>
    );
  }
}
