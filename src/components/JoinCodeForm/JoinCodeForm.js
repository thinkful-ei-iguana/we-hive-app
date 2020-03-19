import React, { Component } from "react";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Button } from "../Utils/Utils";
import "./JoinCodeForm.css";
export default class JoinCodeForm extends Component {
  static defaultProps = {
    onAddCode: () => {}
  };

  static contextType = HiveContext;

  handleCodeSubmit = ev => {
    ev.preventDefault();
    const { user } = this.context;
    const { code } = ev.target;

    HiveApiService.joinCode(code.value, user.id)
      .then(() => {
        code.value = "";
        this.props.onAddCode();
      })
      .catch(this.context.setError);
  };
  render() {
    return (
      <form className="JoinCodeForm" onSubmit={this.handleCodeSubmit}>
        <input
          className="JoinCodeForm__input"
          name="code"
          type="password"
          required
        />
        <Button type="submit">Join new hive</Button>
      </form>
    );
  }
}
