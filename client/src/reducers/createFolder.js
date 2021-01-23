import { CREATE_FOLDER } from "../actions/types";

const createFolder = (state = [], action) => {
  switch (action.type) {
    case CREATE_FOLDER:
      return [...state, action.payload.folder];
    default:
      return state;
  }
};

export default createFolder;
