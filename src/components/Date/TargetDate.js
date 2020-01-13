import React, { Component } from "react";
import DatePicker from "react-datepicker";
import HiveContext from "../../context/HiveContext";
import "react-datepicker/dist/react-datepicker.css";

export default class TargetDate extends Component {
  static contextType = HiveContext;

  render() {
    const { date } = this.context;
    const { name } = this.props;
    return (
      <DatePicker
        className="add-form-input"
        selected={date}
        onChange={this.context.setDate}
        name={name}
      />
    );
  }
}
