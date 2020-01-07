import React, { Component } from "react";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Input, Button } from "../Utils/Utils";

export default class PostCodeForm extends Component {
  static defaultProps = {
    onAddCode: () => {},
    match: { params: {} }
  };

  static contextType = HiveContext;

  handleCodeSubmit = ev => {
    ev.preventDefault();
    const { hiveId } = this.props.match.params;
    const { code } = ev.target;

    HiveApiService.postCode(hiveId, code.value)
      .then(this.context.addCode)
      .then(() => {
        code.value = "";
        this.props.onAddCode();
      })
      .catch(this.context.setError);
  };
  render() {
    return (
      <form className="PostCodeForm" onSubmit={this.handleCodeSubmit}>
        <Input name="code" type="text" required />
        <Button type="submit">Save code</Button>
      </form>
    );
  }
}
