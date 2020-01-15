import React, { Component } from "react";
import { Link } from "react-router-dom";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Button, Textarea } from "../Utils/Utils";
import "./ActivityForm.css";

export default class ActivityForm extends Component {
  static defaultProps = {
    onAddHiveActivity: () => {},

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
      })
      .catch(this.context.setError);
  };

  render() {
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
          {/* <Link
            onClick={this.props.onHandlePosts()}
            to={`/myhives/${this.props.hiveId}/hivemind`}
          > */}
          <Button
            className="Act-button"
            type="submit"
            onClick={this.props.onHandlePosts()}
          >
            Create some buzz
          </Button>
          {/* </Link> */}
        </div>
      </form>
    );
  }
}
