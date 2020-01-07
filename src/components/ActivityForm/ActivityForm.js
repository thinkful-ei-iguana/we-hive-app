import React, { Component } from "react";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Input, Button, Textarea } from "../Utils/Utils";

export default class ActivityForm extends Component {
  static contextType = HiveContext;

  handleSubmit = event => {
    event.preventDefault();
    const { hive } = this.context;
    const { action, timer, rating, notes, reminders } = event.target;
  };

  render() {
    return (
      <form className="ActivityForm" onSubmit={this.handleSubmit}>
        <div className="action">
          <label htmlFor="ActForm__action">Action</label>
          <Input required name="action" id="ActForm__action"></Input>
        </div>
        <div className="timer">
          <label htmlFor="ActForm__timer">Time Spent</label>
          <Input
            required
            name="timer"
            type="password"
            id="ActForm__timer"
          ></Input>
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
