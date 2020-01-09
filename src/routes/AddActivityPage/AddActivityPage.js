import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import HiveContext from "../../context/HiveContext";
import HiveApiService from "../../services/hive-api-service";
import ActivityForm from "../../components/ActivityForm/ActivityForm";
import AddActivityItem from "../../components/AddActivityItem/AddActivityItem";

import "./AddActivityPage.css";

export default class AddActivityPage extends Component {
  static defaultProps = {
    location: {},
    match: {
      params: {}
    },
    history: {
      goForward: () => {}
    }
  };

  static contextType = HiveContext;

  handlePosts = activity => {
    const { history } = this.props;
    const { hiveId } = this.props.match.params;
  };

  componentDidMount() {
    const { hiveId } = this.props.match.params;
    this.context.clearError();
    HiveApiService.getHive(hiveId)
      .then(this.context.setHive)
      .catch(this.context.setError)
      .then(console.log(this.hive));
  }

  renderError() {
    const { error } = this.context;
    if (error.error === "Hive doesn't exist") {
      return <p className="red">Hive not found</p>;
    } else {
      return <p className="red">There was an error.</p>;
    }
  }

  renderHiveHeading() {
    const { hive } = this.context;

    return (
      <AddActivityItem
        key={hive.id}
        className="hive-heading"
        hive={hive}
        hiveId={hive.id}
      />
    );
  }

  render() {
    const { error } = this.context;
    const { hiveId } = this.props.match.params;
    if (error) {
      return this.renderError();
    } else {
      return (
        <div className="ActPage__main">
          {this.renderHiveHeading()}

          <Link to={`/myhives/${hiveId}/hivemind`}>
            <Button>View Hive Mind</Button>
          </Link>
          <ActivityForm hiveId={hiveId} onHandlePosts={this.handlePosts} />
        </div>
      );
    }
  }
}
