import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HiveContext from "../../context/HiveContext";
import Header from "../Header/Header";
import LandingPage from "../../routes/LandingPage/LandingPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import HiveNavPage from "../../routes/HiveNavPage/HiveNavPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import AddActivityPage from "../../routes/AddActivityPage/AddActivityPage";
import PostCodePage from "../../routes/PostCodePage/PostCodePage";
import "./App.css";
import UserDashPage from "../../routes/UserDashPage/UserDashPage";
import AddHivePage from "../../routes/AddHivePage/AddHivePage";
import MemberNavList from "../../routes/MemberNavList/MemberNavList";
import HiveMindPage from "../../routes/HiveMindPage/HiveMindPage";
import JoinCodePage from "../../routes/JoinCodePage/JoinCodePage";

class App extends Component {
  static defaultProps = {
    match: { path: {} }
  };

  state = { hasError: false };

  static contextType = HiveContext;

  renderNavRoutes() {
    return (
      <>
        <div className="Nav_flex">
          <Route path={"/myhives"} component={HiveNavPage} />
          <Route path={"/join"} component={HiveNavPage} />
          <Route path={"/myhives/:hiveId"} component={MemberNavList} />
        </div>
        <Route path={"/myhives/:hiveId/hivemind"} component={MemberNavList} />
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
          <PrivateRoute exact path={"/create"} component={AddHivePage} />
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
        <header className="App__header">
          <Header />
        </header>

        <main className="Hive_container wrapper">
          <div className="Nav_flex wrapper">
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
