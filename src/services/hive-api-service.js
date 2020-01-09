import TokenService from "./token-service";
import config from "../config";

const HiveApiService = {
  getHives() {
    return fetch(`${config.API_ENDPOINT}/hives`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getHive(hiveId) {
    return fetch(`${config.API_ENDPOINT}/hives/${hiveId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getUser(userId) {
    return fetch(`${config.API_ENDPOINT}/hives/user`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getMembers(hiveId) {
    return fetch(`${config.API_ENDPOINT}/hives/${hiveId}/members`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postHive(goal_type, goal_description, target_date, group_message) {
    return fetch(`${config.API_ENDPOINT}/hives`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        goal_type,
        goal_description,
        target_date,
        group_message
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postHiveActivity(hiveId, action, notes) {
    return fetch(`${config.API_ENDPOINT}/activity`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        hive_id: hiveId,
        action,
        notes
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postCode(hiveId, code) {
    return fetch(`${config.API_ENDPOINT}/hives/${hiveId}/code`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ code })
    }).then(res => (!res.ok ? res.json().then(e => Promise.reject(e)) : null));
  },
  joinCode(code, userId) {
    return fetch(`${config.API_ENDPOINT}/hives/code`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ code })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getActivity(hiveId) {
    return fetch(`${config.API_ENDPOINT}/hives/${hiveId}/activity`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default HiveApiService;
