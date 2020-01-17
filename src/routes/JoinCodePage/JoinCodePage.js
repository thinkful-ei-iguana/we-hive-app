import React, { Component } from "react";

import JoinCodeForm from "../../components/JoinCodeForm/JoinCodeForm";
import "./JoinCodePage.css";

export default class PostCodePage extends Component {
  static defaultProps = {
    history: {
      goBack: () => {}
    }
  };

  handleAddCode = code => {
    const { history } = this.props;
    history.goBack();
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
