import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import AddHiveForm from "../../components/AddHiveForm/AddHiveForm";
import "./AddHivePage.css";

export default class AddHivePage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleAddHive = hiveId => {
    const { history } = this.props;
    history.push(`/myhives`);
  };

  render() {
    return (
      <Section className="AddHivePage">
        <h2 className="Page-title">Create a Hive</h2>
        <AddHiveForm onAddHive={this.handleAddHive} />
      </Section>
    );
  }
}
