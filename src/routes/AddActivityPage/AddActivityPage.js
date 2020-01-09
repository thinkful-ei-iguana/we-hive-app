import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import HiveContext from "../../context/HiveContext";

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
    // const { history } = this.props;
    // const { hiveId } = this.props.match.params;
  };

  renderError() {
    const { error } = this.context;
    if (error.error === "Hive doesn't exist") {
      return <p className="red">Hive not found</p>;
    } else {
      return <p className="red">There was an error.</p>;
    }
  }

  renderHiveHeading(hive) {
    if (!hive) return "";
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

    const hive = this.context.hives.find(x => x.id === Number(hiveId));

    if (error) {
      return this.renderError();
    } else {
      return (
        <div className="ActPage__main">
          {this.renderHiveHeading(hive)}

          <Link to={`/myhives/${hiveId}/hivemind`}>
            <Button>View Hive Mind</Button>
          </Link>
          <ActivityForm hiveId={hiveId} onHandlePosts={this.handlePosts} />
        </div>
      );
    }
  }
}
