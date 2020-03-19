import React, { Component } from "react";
import HiveApiService from "../../services/hive-api-service";
import JoinCodeForm from "../../components/JoinCodeForm/JoinCodeForm";
import "./JoinCodePage.css";

export default class PostCodePage extends Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    }
  };

  handleAddCode = () => {
    const { history } = this.props;
    history.goBack();
    HiveApiService.getHives()
      .then(this.context.setHives)
      .catch(this.context.setError);
  };

  render() {
    return (
      <section className="JoinCodePage">
        <h2 className="join-hive">Join a Hive</h2>
        <p>Enter the passcode to join a hive with your friends.</p>
        <JoinCodeForm onAddCode={this.handleAddCode} />
      </section>
    );
  }
}
