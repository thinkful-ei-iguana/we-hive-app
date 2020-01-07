import React, { Component } from "react";

export const nullHive = {};

const HiveContext = React.createContext({
  hive: nullHive,
  hives: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setHives: () => {},
  setHive: () => {},
  addHive: () => {},
  clearHive: () => {}
});

export default HiveContext;

export class HiveProvider extends Component {
  state = {
    error: null,
    hives: [],
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
  };

  render() {
    const value = {
      hive: this.state.hive,
      hives: this.state.hives,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setHives: this.setHives,
      setHive: this.setHive,
      addHive: this.addHive,
      clearHive: this.clearHive,
      hiveTypes: this.state.hiveTypes
    };
    return (
      <HiveContext.Provider value={value}>
        {this.props.children}
      </HiveContext.Provider>
    );
  }
}
