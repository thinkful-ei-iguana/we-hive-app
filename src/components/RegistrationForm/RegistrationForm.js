import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = event => {
    event.preventDefault();
    const { user_name, first_name, user_email, password } = event.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      first_name: first_name.value,
      user_name: user_name.value,
      user_email: user_email.value,
      password: password.value
    })
      .then(user => {
        first_name.value = "";
        user_name.value = "";
        user_email.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="first_name">
          <label htmlFor="RegistrationForm__first_name">
            First name <Required />
          </label>
          <Input
            name="first_name"
            type="text"
            required
            id="RegistrationForm__first_name"
          ></Input>
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">
            User name <Required />
          </label>
          <Input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          ></Input>
        </div>
        <div className="user_email">
          <label htmlFor="RegistrationForm__user_email">
            Email <Required />
          </label>
          <Input
            name="user_email"
            type="text"
            required
            id="RegistrationForm__user_email"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          ></Input>
        </div>
        <div className="confirm-password">
          <label htmlFor="RegistrationForm__confirm-password">
            Confirm Password <Required />
          </label>
          <Input
            name="confirm-password"
            type="password"
            required
            id="RegistrationForm__confirm-password"
          ></Input>
        </div>
        <Button type="submit">Register</Button>
      </form>
    );
  }
}
