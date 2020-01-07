import React, { Component } from "react";
import HiveApiService from "../../services/hive-api-service";
import HiveContext from "../../context/HiveContext";

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
    const { users = [] } = this.context;
    return (
      <>
        <h4 className="MemberNavList__heading">Members in Hive</h4>
        {users.map(user => (
          <li key={user.id} className="hive-member" user={user} />
        ))}
      </>
    );
  }
}
