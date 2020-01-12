import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HiveContext from "../../context/HiveContext";

import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import LandingPage from "../../routes/LandingPage/LandingPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import LoginPage from "../../routes/LoginPage/LoginPage";

import PrivateRoute from "../Utils/PrivateRoute";
import HiveNavPage from "../../routes/HiveNavPage/HiveNavPage";
import MemberNavList from "../../routes/MemberNavList/MemberNavList";

import UserDashPage from "../../routes/UserDashPage/UserDashPage";
import AddHivePage from "../../routes/AddHivePage/AddHivePage";
import AddActivityPage from "../../routes/AddActivityPage/AddActivityPage";
import HiveMindPage from "../../routes/HiveMindPage/HiveMindPage";
import PostCodePage from "../../routes/PostCodePage/PostCodePage";
import "./App.css";
import JoinCodePage from "../../routes/JoinCodePage/JoinCodePage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";

class App extends Component {
  state = { hasError: false };

  static contextType = HiveContext;

  renderNavRoutes() {
    return (
      <>
        <div className="Nav_flex">
          <Route path={"/myhives"} component={HiveNavPage} />
          <Route path={"/join"} component={HiveNavPage} />
          <Route path={"/create"} component={HiveNavPage} />
          <Route path={"/myhives/:hiveId"} component={MemberNavList} />
        </div>
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />

          <PublicOnlyRoute path={"/login"} component={LoginPage} />
          <PublicOnlyRoute path={"/register"} component={RegistrationPage} />

          <PrivateRoute exact path={"/myhives"} component={UserDashPage} />
          <PrivateRoute path={"/create"} component={AddHivePage} />
          <PrivateRoute path={"/join"} component={JoinCodePage} />
          <PrivateRoute
            exact
            path={"/myhives/:hiveId"}
            component={AddActivityPage}
          />
          <PrivateRoute
            path={"/myhives/:hiveId/code"}
            component={PostCodePage}
          />

          <PrivateRoute
            path={"/myhives/:hiveId/hivemind"}
            component={HiveMindPage}
          />

          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <main className="Hive_container wrapper">
          {this.state.hasError && (
            <p className="red">Something went wrong. Please try again later.</p>
          )}
          <div className="Nav_flex">
            <nav className="App__nav collapsed">{this.renderNavRoutes()}</nav>
          </div>
          <section className="App__main wrapper">
            {this.renderMainRoutes()}
          </section>
        </main>
      </div>
    );
  }
}
export default App;
