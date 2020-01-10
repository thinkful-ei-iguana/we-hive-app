import React, { Component } from "react";
import HiveContext from "../../context/HiveContext";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import "./HiveTypeAccordion.css";

export default class HiveTypeAccordion extends Component {
  static defaultProps = {
    types: []
  };

  state = {
    // activeTypeIndex: null
    expanded: false
  };

  static contextType = HiveContext;

  handleSetActiveType = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  renderButtons(expanded) {
    const { type } = this.props;
    return (
      <div className="Accordion__section">
        <button
          className="Accordion"
          onClick={() => this.handleSetActiveType()}
        >
          <p className="Accordion__title">{type}</p>
        </button>
        {/* fix this so that render "No hives yet" */}
        {expanded && this.renderTitles()}
      </div>
    );
  }

  renderTitles() {
    const { goals, id } = this.props;
    const goalFilter = goals.filter(goal => goal.goal_type === id);

    return (
      <ul className="HiveType__list">
        {goalFilter.map(goal => (
          <li key={goal.id} className="goal-desc">
            <AccordionItem
              id={goal.id}
              goalTitle={goal.goal_description}
              noHive="No Hives Yet!"
            />
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { expanded } = this.state;

    return <>{this.renderButtons(expanded)}</>;
  }
}
