import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import LandingPage from "../../routes/LandingPage/LandingPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import HiveNavPage from "../../routes/HiveNavPage/HiveNavPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import HivePage from "../../routes/HivePage/HivePage";
import PostCodePage from "../../routes/PostCodePage/PostCodePage";
import "./App.css";
import UserDashPage from "../../routes/UserDashPage/UserDashPage";
import AddHivePage from "../../routes/AddHivePage/AddHivePage";
import MemberNavList from "../../routes/MemberNavList/MemberNavList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  handleAddHive = hive => {
    this.setState({
      hives: [...this.state.hives, hive]
    });
  };

  renderNavRoutes() {
    return (
      <>
        <Route exact path={"/myhives/"} component={HiveNavPage} />
        <Route exact path={"/myhives/:hiveId"} component={HiveNavPage} />
        <Route path={"/myhives/:hiveId/hive-mind"} component={MemberNavList} />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        {this.state.hasError && (
          <p className="red">Something went wrong. Please try again later.</p>
        )}
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <PublicOnlyRoute path={"/login"} component={LoginPage} />
          <PublicOnlyRoute path={"/register"} component={RegistrationPage} />
          <PrivateRoute exact path={"/myhives"} component={UserDashPage} />
          <PrivateRoute exact path={"/add-hive"} component={AddHivePage} />
          <PrivateRoute exact path={"/myhives/:hiveId"} component={HivePage} />
          <PrivateRoute
            path={"/myhives/:hiveId/add-code"}
            component={PostCodePage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <div className="Hive_container">
          <nav className="App__nav">{this.renderNavRoutes()}</nav>
          <main className="App__main">{this.renderMainRoutes()}</main>
        </div>
      </div>
    );
  }
}
export default App;
