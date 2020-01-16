import React, { Component } from "react";
import HiveContext from "../../context/HiveContext";
import { Button } from "../../components/Utils/Utils";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import "./HiveTypeAccordion.css";

export default class HiveTypeAccordion extends Component {
  static defaultProps = {
    goals: []
  };

  state = {
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
        <Button
          className="Accordion"
          onClick={() => this.handleSetActiveType()}
        >
          <p className="Accordion__title">{type}</p>
        </Button>
        {expanded && this.renderTitles()}
      </div>
    );
  }

  renderTitles() {
    const { goals, id, showMenu } = this.props;

    const goalFilter = goals.filter(goal => goal.goal_type === id);

    return (
      <>
        <ul className="HiveType__list">
          <li className="goal-desc">
            {!goalFilter.length && (
              <AccordionItem
                goalTitle="No hives yet"
                id=""
                showMenu={showMenu}
              />
            )}
          </li>
        </ul>
        <ul className="HiveType__list">
          {goalFilter.map(goal => (
            <li key={goal.id} className="goal-desc">
              <AccordionItem
                id={goal.id}
                goalTitle={goal.goal_description}
                showMenu={showMenu}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }

  render() {
    const { expanded } = this.state;

    return <>{this.renderButtons(expanded)}</>;
  }
}
