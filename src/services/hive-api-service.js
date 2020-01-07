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
  }
};

export default HiveApiService;
