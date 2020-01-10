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
  render() {
    const { hive, users = [], hives = [] } = this.context;
    const { hiveId } = this.props.match.params;

    const hiveS = hives.find(n => n.id === Number(hiveId));

    return (
      <div className="Member_container">
        <h3 className="MemberNavList__heading">Hive Members</h3>
        <ul>
          {users.map(user => (
            <li key={user.id} className="hive-member" user={user.first_name}>
              {user.user_name} ({user.first_name})
            </li>
          ))}
        </ul>
        <Link to={`/myhives/${hiveId}/code`}>
          <Button>Add members to hive</Button>
        </Link>
      </div>
    );
  }
}
