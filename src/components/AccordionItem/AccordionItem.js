import React, { Component } from "react";

import "./AccordionItem.css";
export default class AccordionItem extends Component {
  render() {
    const { goalTitle, id, showMenu } = this.props;

    return (
      <>
        <a href={`/myhives/${id}`}>
          <div className="HiveNavItem__title" onClick={() => showMenu()}>
            {goalTitle}
          </div>
        </a>
      </>
    );
  }
}
