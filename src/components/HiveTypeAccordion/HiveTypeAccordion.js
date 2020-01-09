import React, { Component } from "react";
import "./HiveTypeAccordion.css";

export default class HiveTypeAccordion extends Component {
  render() {
    return (
      <div className="Accordion__section">
        <button className="Accordion">
          <p className="accordion__title">{this.props.type}</p>
        </button>
      </div>
    );
  }
}
