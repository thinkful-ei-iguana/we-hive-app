import React, { Component } from "react";
import { Link } from "react-router-dom";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import { Button, Textarea } from "../Utils/Utils";
import "./ActivityForm.css";

export default class ActivityForm extends Component {
  static defaultProps = {
    match: { params: {} },
    onRedirect: () => {}
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
        this.props.onRedirect(hive.id);
      })
      .catch(this.context.setError);
  };

  render() {
    const { hiveId } = this.props;
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
          <div className="btn-container">
            <Button className="Act-button" type="submit">
              Create some buzz
            </Button>
            <Link to={`/myhives/${hiveId}/hivemind`}>
              <Button>View Hive Mind</Button>
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
