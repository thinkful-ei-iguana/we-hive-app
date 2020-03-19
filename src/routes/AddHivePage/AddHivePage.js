import React, { Component } from "react";
import AddHiveForm from "../../components/AddHiveForm/AddHiveForm";
import "./AddHivePage.css";

export default class AddHivePage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleAddHive = () => {
    const { history } = this.props;
    history.push(`/myhives`);
  };

  render() {
    return (
      <section className="AddHivePage">
        <h2 className="Page-title">Create a Hive</h2>
        <AddHiveForm onAddHive={this.handleAddHive} />
      </section>
    );
  }
}
