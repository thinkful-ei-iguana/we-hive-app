import React, { Component } from "react";

import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Button, Textarea } from "../Utils/Utils";

export default class ActivityForm extends Component {
  static defaultProps = {
    onAddHiveActivity: () => {},
    onPost: () => {},
    match: { params: {} }
  };

  static contextType = HiveContext;

  handleActSubmit = event => {
    event.preventDefault();
    const { hive } = this.context;
    const { action, notes } = event.target;

    HiveApiService.postHiveActivity(hive.id, action.value, notes.value)
      .then(this.context.addActivityList)
      .then(() => {
        action.value = "";
        notes.value = "";
        this.props.onPost();
      })
      .catch(this.context.setError);
  };

  render() {
    const { onHandlePosts } = this.props;
    return (
      <form className="ActivityForm" onSubmit={this.handleActSubmit}>
        <div className="action">
          <label htmlFor="ActForm__action">Add Action Taken</label>
          <Textarea name="action" id="ActForm__action"></Textarea>
        </div>

        <div className="notes">
          <label htmlFor="ActForm__notes">Add a comment</label>
          <Textarea
            aria-label="Add notes"
            name="notes"
            id="ActForm__notes"
          ></Textarea>
          <Button type="submit" onClick={this.props.onHandlePosts()}>
            Create some buzz
          </Button>
        </div>
      </form>
    );
  }
}
