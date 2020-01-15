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
          <label htmlFor="AddForm__goal_type" className="AddForm-required">
            Type of Goal
          </label>
          <select
            required
            aria-label="Select type of goal"
            name="goal_type"
            id="AddForm__goal_type"
          >
            <option value="1">Event</option>
            <option value="2">Current Goal</option>
            <option value="3">Stretch Goal</option>
            <option value="4">Dream Goal</option>
            <option value="5">Completed Goal</option>
          </select>
        </div>
        <div className="goal_description">
          <label
            htmlFor="AddForm__goal_description"
            className="AddForm-required"
          >
            Goal Description
          </label>
          <input
            required
            type="text"
            aria-label="Goal description"
            className="add-form-input"
            name="goal_description"
            id="AddForm__goal_description"
          />
        </div>
        <div className="target_date">
          <label htmlFor="AddForm__target_date" className="AddForm-required">
            Target date
          </label>
          <TargetDate
            aria-label="Target date"
            className="add-form-input"
            name="target_date"
            id="AddForm__target_date"
            onAddHive={this.props.onAddHive}
          />
        </div>
        <div className="group_message">
          <label htmlFor="AddForm__group_message">Message to the group</label>
          <Textarea
            aria-label="Write a message to your hive"
            className="add-form-input"
            name="group_message"
            id="AddForm__group_message"
            placeholder="Write a message to the hive..."
          />
        </div>
        <Button type="submit">Save hive</Button>
      </form>
    );
  }
}
