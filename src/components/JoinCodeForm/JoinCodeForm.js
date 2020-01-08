import React, { Component } from "react";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Input, Button } from "../Utils/Utils";

export default class JoinCodeForm extends Component {
  static defaultProps = {
    onAddCode: () => {}
  };

  static contextType = HiveContext;

  handleCodeSubmit = ev => {
    ev.preventDefault();
    const { hiveId } = this.props;
    const { code } = ev.target;

    HiveApiService.joinCode(hiveId, code.value)
      .then(this.context.setCode)
      .then(() => {
        code.value = "";
        this.props.onAddCode();
      })
      .catch(this.context.setError);
  };
  render() {
    return (
      <form className="JoinCodeForm" onSubmit={this.handleCodeSubmit}>
        <Input name="code" type="text" required />
        <Button type="submit">Save code</Button>
      </form>
    );
  }
}
