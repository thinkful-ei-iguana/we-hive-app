import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import AddHiveForm from "../../components/AddHiveForm/AddHiveForm";

export default class AddHivePage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleAddHive = hive => {
    const { history } = this.props;
    history.push("/myhives");
  };

  render() {
    return (
      <Section className="AddHivePage">
        <h2>Create a Hive</h2>
        <AddHiveForm onAddHive={this.handleAddHive} />
      </Section>
    );
  }
}
