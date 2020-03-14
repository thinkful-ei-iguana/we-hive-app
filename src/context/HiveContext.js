import React, { Component } from "react";

export const nullHive = {};

const HiveContext = React.createContext({
  activityList: [],
  code: null,
  date: null,
  error: null,
  hive: nullHive,
  hives: [],
  hiveTypes: [],
  user: null,
  users: [],
  addActivity: () => {},
  addHive: () => {},
  clearError: () => {},
  clearHive: () => {},
  clearUser: () => {},
  setActivity: () => {},
  setCode: () => {},
  setDate: () => {},
  setError: () => {},
  setHive: () => {},
  setHives: () => {},
  setUser: () => {},
  setUsers: () => {}
});

export default HiveContext;

export class HiveProvider extends Component {
  state = {
    activityList: [],
    code: null,
    date: null,
    error: null,
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
        type: "Dream Goals"
      },
      {
        id: 5,
        type: "Completed Goals"
      }
    ],
    hives: [],
    user: null,
    users: []
  };

  addActivity = activity => {
    this.setActivity([...this.state.activityList, activity]);
  };

  addHive = hive => {
    this.setHives([...this.state.hives, hive]);
  };

  clearError = () => {
    this.setState({ error: null });
  };

  clearHive = () => {
    this.setHive(nullHive);
    this.setActivity([]);
  };

  clearUser = () => {
    this.setUser({ user: null });
  };

  setActivity = activityList => {
    this.setState({ activityList });
  };

  setCode = code => {
    this.setState({ code });
  };

  setDate = date => {
    this.setState({ date });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  setHive = hive => {
    this.setState({ hive });
  };

  setHives = hives => {
    this.setState({ hives });
  };

  setUser = user => {
    this.setState({ user });
  };

  setUsers = users => {
    this.setState({ users });
  };

  render() {
    const value = {
      activityList: this.state.activityList,
      code: this.state.code,
      date: this.state.date,
      error: this.state.error,
      hive: this.state.hive,
      hiveTypes: this.state.hiveTypes,
      hives: this.state.hives,
      user: this.state.user,
      users: this.state.users,
      addActivity: this.addActivity,
      addHive: this.addHive,
      clearError: this.clearError,
      clearHive: this.clearHive,
      clearUser: this.clearUser,
      setActivity: this.setActivity,
      setCode: this.setCode,
      setDate: this.setDate,
      setError: this.setError,
      setHive: this.setHive,
      setHives: this.setHives,
      setUser: this.setUser,
      setUsers: this.setUsers
    };
    return (
      <HiveContext.Provider value={value}>
        {this.props.children}
      </HiveContext.Provider>
    );
  }
}
