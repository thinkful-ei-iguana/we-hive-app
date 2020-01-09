import React, { Component } from "react";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Button } from "../Utils/Utils";

export default class JoinCodeForm extends Component {
  static defaultProps = {
    onAddCode: () => {}
  };

  static contextType = HiveContext;

  handleCodeSubmit = ev => {
    ev.preventDefault();

    const { code } = ev.target;

    HiveApiService.joinCode(code, 1)
      .then(() => {
        code.value = "";
        this.props.onAddCode();
      })
      .catch(this.context.setError);
  };
  render() {
    return (
      <form className="JoinCodeForm" onSubmit={this.handleCodeSubmit}>
        <input name="code" type="text" required />
        <Button type="submit">Join new hive</Button>
      </form>
    );
  }
}
