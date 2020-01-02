import React, { Component } from "react";

const GoalContext = React.createContext({
  goals: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  addGoal: () => {}
});

export default GoalContext;

export class GoalProvider extends Component {
  state = {
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setGoals = goals => {
    this.setState({ goals });
  };

  addGoal = goal => {
    this.setGoals([...this.state.goals, goal]);
  };

  render() {
    const value = {
      goals: this.state.goals,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGoals: this.setGoals,
      addGoal: this.addGoal
    };
    return (
      <GoalContext.Provider value={value}>
        {this.props.children}
      </GoalContext.Provider>
    );
  }
}
