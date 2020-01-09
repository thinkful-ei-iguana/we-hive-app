import React, { Component } from "react";

import { Section } from "../../components/Utils/Utils";
import PostCodeForm from "../../components/PostCodeForm/PostCodeForm";

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
    const { hiveId } = this.props.match.params;
    return (
      <Section className="PostCodePage">
        <h2>Create a Hive</h2>
        <p>
          To make your hive public, add a password below, save, and share with
          your friends.
        </p>
        <PostCodeForm onAddCode={this.handleAddCode} hiveId={hiveId} />
      </Section>
    );
  }
}
