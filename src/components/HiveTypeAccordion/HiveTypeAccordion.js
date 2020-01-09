import React, { Component } from "react";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import "./HiveTypeAccordion.css";

export default class HiveTypeAccordion extends Component {
  render() {
    const { goals, type, id } = this.props;
    const goalFilter = goals.filter(goal => goal.goal_type === id);

    return (
      <div className="Accordion__section">
        <button className="Accordion">
          <p className="Accordion__title">{type}</p>
        </button>
        <ul className="HiveType__list">
          {goalFilter.map(goal => (
            <li key={goal.id} className="goal-desc">
              <AccordionItem id={goal.id} goalTitle={goal.goal_description} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
