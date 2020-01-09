import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import { Button } from "../Utils/Utils";
import "./LoginForm.css";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = event => {
    event.preventDefault();
    this.setState({ error: null });
    const { user_email, password } = event.target;

    AuthApiService.postLogin({
      user_email: user_email.value,
      password: password.value
    })
      .then(res => {
        user_email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>

        <div className="user_email">
          <label htmlFor="LoginForm__user_email">Email</label>
          <input required name="user_email" id="LoginForm__user_email" />
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <input
            required
            name="password"
            type="password"
            id="LoginForm__password"
          />
        </div>
        <Button type="submit">Log in</Button>
      </form>
    );
  }
}
