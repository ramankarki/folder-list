import { FETCH_FOLDERS } from "../actions/types";

const fetchFolders = (state = [], action) => {
  switch (action.type) {
    case FETCH_FOLDERS:
      return [...action.payload.folders];
    default:
      return state;
  }
};
export default fetchFolders;
