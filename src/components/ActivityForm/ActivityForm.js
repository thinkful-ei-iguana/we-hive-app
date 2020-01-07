import React, { Component } from "react";

import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Input, Button, Textarea } from "../Utils/Utils";

export default class ActivityForm extends Component {
  static defaultProps = {
    onAddHiveActivity: () => {}
  };

  static contextType = HiveContext;

  handleActSubmit = event => {
    event.preventDefault();
    const { hive } = this.context;
    const { action, timer, notes } = event.target;

    HiveApiService.postHiveActivity(
      hive.id,
      action.value,
      timer.value,
      notes.value
    )
      .then(this.context.addActivityList)
      .then(() => {
        action.value = "";
        timer.value = "";
        notes.value = "";
      })
      .catch(this.context.setError);
  };

  render() {
    return (
      <form className="ActivityForm" onSubmit={this.handleActSubmit}>
        <div className="action">
          <label htmlFor="ActForm__action">Action</label>
          <Input required name="action" id="ActForm__action"></Input>
        </div>
        <div className="timer">
          <label htmlFor="ActForm__timer">Time Spent</label>
          <Input required name="timer" type="time" id="ActForm__timer"></Input>
        </div>
        <div className="notes">
          <label htmlFor="ActForm__notes">Comments</label>
          <Textarea
            aria-label="Add notes"
            name="notes"
            id="ActForm__notes"
          ></Textarea>

          <Button type="submit">Create some buzz</Button>
        </div>
      </form>
    );
  }
}
