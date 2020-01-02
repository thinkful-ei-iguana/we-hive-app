import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import LandingPage from "../../routes/LandingPage/LandingPage";
import LoginPage from "../../routes/LoginPage";
import NavBarGoal from "../../routes/NavBarGoal/NavBarGoal";
import NotFoundPage from "../../routes/NotFoundPage";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import RegistrationPage from "../../routes/RegistrationPage";
import UserDashPage from "../../routes/UserDashPage/UserDashPage";

import "./App.css";
class App extends Component {
  state = {
    hasError: false,
    goals: []
  };

  componentDidMount() {
    Promise.all([fetch("http://localhost:8080/api/goals/")])
      .then(goalsRes => {
        if (!goalsRes.ok) return goalsRes.json().then(e => Promise.reject(e));
        return Promise.all(goalsRes.json());
      })
      .then(goals => {
        this.setState({ goals });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  handleAddGoal = goal => {
    this.setState({
      goals: [...this.state.goals, goal]
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">Something went wrong. Please try again later.</p>
          )}
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <PublicOnlyRoute path={"/login"} component={LoginPage} />
            <PublicOnlyRoute path={"/register"} component={RegistrationPage} />
            <PrivateRoute path={"/mygoals"} component={NavBarGoal} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
