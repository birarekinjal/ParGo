import { login } from "../apis/login";
import { saveToken } from "../utility/common";

const SET_USER_TOKEN = "SET_USER_TOKEN";
const LOGOUT = "LOGOUT";

// const setUserToken = (body) => (dispatch) => {
//   return login(body).then((res) => {
//     if (res.data.status === true) {
//       let token = 'Bearer ' + res.data.data.access_token;
//       saveToken(token);
//       dispatch({
//         type: SET_USER_TOKEN,
//         payload: token,
//       });
//     }
//     return res.data;
//   });
// };

const setUserToken = (body) => (dispatch) => {
  let token = "Bearer " + "abc";
  saveToken(token);
  dispatch({
    type: SET_USER_TOKEN,
    payload: token,
  });
  return "res";
};

const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT, payload: {} });
  };
};

export { setUserToken, logout, SET_USER_TOKEN, LOGOUT };
