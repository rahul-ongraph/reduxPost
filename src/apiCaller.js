import {
  fetchLoginBegin,
  fetchLoginFailure,
  fetchLoginSuccess,
} from "./redux/action";

export function fetchLogin(body, method) {
  return (dispatch) => {
    dispatch(fetchLoginBegin());
    return fetch("https://reqres.in/api/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchLoginSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchLoginFailure(error)));
  };
}
