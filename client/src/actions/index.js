import axios from "axios";
import { FETCH_USER, ACTIVE_ACTION_DROPDOWN } from "./types";

export const fetchUser = () => async (dispatch) => {
  const user = await axios.get("/auth/google/status");

  dispatch({ type: FETCH_USER, payload: user.data });
};

export const activeDropdown = (elementID) => (dispatch, getState) => {
  const activeDropdown = getState().activeDropdown;

  if (elementID === activeDropdown) {
    dispatch({ type: ACTIVE_ACTION_DROPDOWN, payload: null });
  } else {
    dispatch({ type: ACTIVE_ACTION_DROPDOWN, payload: elementID });
  }
};
