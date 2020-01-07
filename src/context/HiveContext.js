import React, { Component } from "react";

export const nullHive = {};

const HiveContext = React.createContext({
  hive: nullHive,
  hives: [],
  activityList: [],
  users: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setHives: () => {},
  setHive: () => {},
  addHive: () => {},
  clearHive: () => {},
  setActivity: () => {},
  addActivity: () => {},
  addCode: () => {}
});

export default HiveContext;

export class HiveProvider extends Component {
  state = {
    code: null,
    error: null,
    hives: [],
    users: [],
    hive: nullHive,
    hiveTypes: [
      {
        id: 1,
        type: "Events"
      },
      {
        id: 2,
        type: "Current Goals"
      },
      {
        id: 3,
        type: "Stretch Goals"
      },
      {
        id: 4,
        type: "Future Goals"
      },
      {
        id: 5,
        type: "Dream Goals"
      },
      {
        id: 6,
        type: "Completed Goals"
      }
    ]
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setHives = hives => {
    this.setState({ hives });
  };

  setHive = hive => {
    this.setState({ hive });
  };

  addHive = hive => {
    this.setHives([...this.state.hives, hive]);
  };

  clearHive = () => {
    this.setHive(nullHive);
    this.setActivity([]);
  };

  setActivity = activityList => {
    this.setState({ activityList });
  };

  addActivity = activity => {
    this.setActivity([...this.state.activityList, activity]);
  };

  addCode = code => {
    this.setState({ code });
  };

  setUsers = users => {
    this.setState([...users]);
  };

  render() {
    const value = {
      hive: this.state.hive,
      hives: this.state.hives,
      users: this.state.users,
      activityList: this.state.activityList,
      error: this.state.error,
      code: this.state.code,
      setError: this.setError,
      clearError: this.clearError,
      setHives: this.setHives,
      setHive: this.setHive,
      addHive: this.addHive,
      clearHive: this.clearHive,
      hiveTypes: this.state.hiveTypes,
      setActivity: this.setActivity,
      addActivity: this.addActivity,
      addCode: this.addCode,
      setUsers: this.setUsers
    };
    return (
      <HiveContext.Provider value={value}>
        {this.props.children}
      </HiveContext.Provider>
    );
  }
}
