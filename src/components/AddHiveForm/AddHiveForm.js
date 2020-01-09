import React, { Component } from "react";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Button, Textarea, Required } from "../Utils/Utils";
import "./AddHiveForm.css";
import TargetDate from "../Date/TargetDate";

export default class AddHiveForm extends Component {
  static defaultProps = {
    onAddHive: () => {}
  };

  static contextType = HiveContext;

  handleAddSubmit = event => {
    event.preventDefault();

    const {
      goal_type,
      goal_description,
      target_date,
      group_message
    } = event.target;

    HiveApiService.postHive(
      goal_type.value,
      goal_description.value,
      target_date.value,
      group_message.value
    )
      .then(this.context.addHive)
      .then(() => {
        goal_description.value = "";
        group_message.value = "";
        this.props.onAddHive();
      });
  };

  render() {
    return (
      <form className="AddHiveForm" onSubmit={this.handleAddSubmit}>
        <div className="goal_type">
          <label htmlFor="AddForm__goal_type">
            Type of Goal <Required />
          </label>
          <select
            required
            aria-label="Select goal type"
            name="goal_type"
            id="AddForm__goal_type"
          >
            <option value="Event">Event</option>
            <option value="Current Goal">Current Goal</option>
            <option value="Stretch Goal">Stretch Goal</option>
            <option value="Future Goal">Future Goal</option>
            <option value="Dream Goal">Dream Goal</option>
            <option value="Completed Goal">Completed Goal</option>
          </select>
        </div>
        <div className="goal_description">
          <label htmlFor="AddForm__goal_description">
            Goal Description <Required />
          </label>
          <input
            required
            type="text"
            name="goal_description"
            id="AddForm__goal_description"
          />
        </div>
        <div className="target_date">
          <label htmlFor="AddForm__target_date">
            Target date <Required />
          </label>
          <TargetDate
            name="target_date"
            id="AddForm__target_date"
            onAddHive={this.props.onAddHive}
          />
        </div>
        <div className="group_message">
          <label htmlFor="AddForm__group_message">Message to the group</label>
          <Textarea
            aria-label="Type a message to your hive"
            name="group_message"
            id="AddForm__group_message"
          />
        </div>
        <Button type="submit">Save hive</Button>
      </form>
    );
  }
}
