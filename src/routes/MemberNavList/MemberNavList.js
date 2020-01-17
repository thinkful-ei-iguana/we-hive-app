import React, { Component } from "react";
import { Link } from "react-router-dom";
import HiveApiService from "../../services/hive-api-service";
import HiveContext from "../../context/HiveContext";
import { Button } from "../../components/Utils/Utils";
import "./MemberNavList.css";

export default class MemberNavList extends Component {
  static defaultProps = {
    match: { params: {} }
  };
  static contextType = HiveContext;

  componentDidMount() {
    const { hiveId } = this.props.match.params;
    this.context.clearError();
    HiveApiService.getMembers(hiveId)
      .then(this.context.setUsers)
      .catch(this.context.setError);
  }

  renderHiveMembers(hiveMembers) {
    if (!hiveMembers) return "";
    return (
      <ul>
        {hiveMembers.map(user => (
          <li key={user.id} className="hive-member" user={user.first_name}>
            {user.user_name} ({user.first_name})
          </li>
        ))}
      </ul>
    );
  }
  render() {
    const { users = [] } = this.context;
    const { hiveId } = this.props.match.params;

    const hiveMembers = users.filter(user => user.hive_id === Number(hiveId));

    return (
      <div className="Member_container">
        <h3 className="MemberNavList__heading">Hive Members</h3>
        {this.renderHiveMembers(hiveMembers)}
        <Link to={`/myhives/${hiveId}/code`}>
          <Button>Add members</Button>
        </Link>
      </div>
    );
  }
}
