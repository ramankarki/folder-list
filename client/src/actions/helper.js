import {
  ERROR,
  FOLDER_REQUEST_LOADING,
  ON_MODAL_TITLE_CHANGE,
  ON_MODAL_DESC_CHANGE,
  ACTIVE_ACTION_DROPDOWN,
  FOLDER_MODAL_STATE,
} from "./types";

export const errorCreator = (heading, text, dispatch) => {
  dispatch({
    type: ERROR,
    payload: {
      heading,
      text,
    },
  });
};

export const folderRequestLoading = (isLoading, dispatch) => {
  dispatch({
    type: FOLDER_REQUEST_LOADING,
    payload: isLoading,
  });
};

export const exitCreateUpdateFolder = (dispatch) => {
  dispatch({
    type: ON_MODAL_TITLE_CHANGE,
    payload: "",
  });
  dispatch({
    type: ON_MODAL_DESC_CHANGE,
    payload: "",
  });
  dispatch({
    type: ACTIVE_ACTION_DROPDOWN,
    payload: "exit-modal-btn",
  });
  dispatch({
    type: FOLDER_MODAL_STATE,
    payload: "",
  });
};
