import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./AccordionItem.css";
export default class AccordionItem extends Component {
  render() {
    const { goalTitle, id } = this.props;

    return (
      <>
        <Link to={`/myhives/${id}`}>
          <div className={"HiveNavItem__title"}>{goalTitle}</div>
        </Link>
      </>
    );
  }
}
