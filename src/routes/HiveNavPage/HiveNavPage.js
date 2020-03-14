import React, { Component } from "react";
import { Link } from "react-router-dom";
import HiveContext from "../../context/HiveContext";
import { Button } from "../../components/Utils/Utils";
import HiveApiService from "../../services/hive-api-service";
import HiveTypeAccordion from "../../components/HiveTypeAccordion/HiveTypeAccordion";
import Logo from "../../images/WeHiveNav.png";
import "./HiveNavPage.css";

export default class HiveNavPage extends Component {
  state = {
    showMenu: false
  };
  static contextType = HiveContext;

  componentDidMount() {
    this.context.clearError();
    HiveApiService.getHives()
      .then(this.context.setHives)
      .catch(this.context.setError);
  }

  handleToggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  };

  renderTypes() {
    const { hiveTypes } = this.context;
    const { hives = [] } = this.context;

    return (
      <div className="HiveNavPage">
        <ul className="HiveNavPage__list">
          {hiveTypes.map(hiveType => (
            <li key={hiveType.id} className="hive-type">
              <HiveTypeAccordion
                id={hiveType.id}
                type={hiveType.type}
                goals={hives}
                noHives=""
                showMenu={this.handleToggleMenu}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { showMenu } = this.state;
    return (
      <div className="App__main wrapper">
        <div className="HiveNavPage__container">
          <div className="logo-container">
            <Link to="/myhives">
              <img src={Logo} alt="logo" className="HiveNavPage__logo" />
            </Link>

            <Button
              className="Nav__menu"
              onClick={() => this.handleToggleMenu()}
            >
              My Hives
            </Button>
          </div>
          {showMenu && (
            <div className="mobile-dropdown">{this.renderTypes()}</div>
          )}

          <div className="Types__container">{this.renderTypes()}</div>

          <div className="btn-container">
            <Link to={"/create"}>
              <Button className="Nav__button">Add hive</Button>
            </Link>
            <Link to={`/join`}>
              <Button className="Nav__button">Join hive</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
