import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./AccordionItem.css";
export default class AccordionItem extends Component {
  render() {
    const { goalTitle, id, showMenu } = this.props;

    return (
      <>
        <Link to={`/myhives/${id}`}>
          <div className={"HiveNavItem__title"} onClick={() => showMenu()}>
            {goalTitle}
          </div>
        </Link>
      </>
    );
  }
}
