import { combineReducers } from "redux";
import fetchUser from "./fetchUser";

export default combineReducers({
  user: fetchUser,
});
