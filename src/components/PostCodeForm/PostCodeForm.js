import React, { Component } from "react";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Button } from "../Utils/Utils";

export default class PostCodeForm extends Component {
  static defaultProps = {
    onAddCode: () => {}
  };

  static contextType = HiveContext;
  state = { error: null };

  handleCodeSubmit = ev => {
    ev.preventDefault();

    const { hiveId } = this.props;
    const { user } = this.context;
    const { code } = ev.target;

    HiveApiService.postCode(hiveId, user.id, code.value)
      .then(this.context.setCode)
      .then(() => {
        code.value = "";
        this.props.onAddCode();
      })
      .catch(res => {
        code.value = "";
        this.setState({ error: res.error });
      });
  };

  handleNewCode = () => {
    this.setState({ error: null });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="JoinCodeForm" onSubmit={this.handleCodeSubmit}>
        <div role="alert">
          {error && <p className="red">Please use a different code</p>}
        </div>
        {!error && (
          <input
            className="JoinCodeForm__input"
            name="code"
            type="password"
            required
          />
        )}
        {error && <Button onClick={this.handleNewCode}>Try Again</Button>}
        {!error && <Button type="submit">Save password</Button>}
      </form>
    );
  }
}
