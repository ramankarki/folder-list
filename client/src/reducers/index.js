import { combineReducers } from "redux";
import fetchUser from "./fetchUser";
import activeDropdown from "./activeDropdown";

export default combineReducers({
  user: fetchUser,
  activeDropdown,
});
