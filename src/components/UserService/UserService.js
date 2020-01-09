import React, { Component } from "react";
import HiveApiService from "../../services/hive-api-service";
import HiveContext from "../../context/HiveContext";

export default class UserService extends Component {
  static contextType = HiveContext;

  componentDidMount() {
    HiveApiService.getUser()
      .then(this.context.setUser)
      .catch(this.context.setError);
  }

  render() {
    return <>{this.props.children}</>;
  }
}
