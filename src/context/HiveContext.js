import React, { Component } from "react";

export const nullHive = {};

const HiveContext = React.createContext({
  code: null,
  hive: nullHive,
  hives: [],
  activityList: [],
  user: null,
  users: [],
  error: null,
  date: null,
  setError: () => {},
  clearError: () => {},
  setHives: () => {},
  setHive: () => {},
  addHive: () => {},
  clearHive: () => {},
  setActivity: () => {},
  addActivity: () => {},
  setCode: () => {}
});

export default HiveContext;

export class HiveProvider extends Component {
  state = {
    code: null,
    error: null,
    hives: [],
    users: [],
    hive: nullHive,
    user: null,
    date: null,
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

  setCode = code => {
    this.setState({ code });
  };

  setDate = date => {
    this.setState({ date });
  };

  setUser = user => {
    this.setState({ user });
  };

  setUsers = users => {
    this.setState({ users });
  };

  render() {
    const value = {
      date: this.state.date,
      code: this.state.code,
      hive: this.state.hive,
      hives: this.state.hives,
      user: this.state.user,
      users: this.state.users,
      activityList: this.state.activityList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setHives: this.setHives,
      setHive: this.setHive,
      addHive: this.addHive,
      clearHive: this.clearHive,
      hiveTypes: this.state.hiveTypes,
      setActivity: this.setActivity,
      addActivity: this.addActivity,
      setCode: this.setCode,
      setUser: this.setUser,
      setUsers: this.setUsers,
      setDate: this.setDate
    };
    return (
      <HiveContext.Provider value={value}>
        {this.props.children}
      </HiveContext.Provider>
    );
  }
}
