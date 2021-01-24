import axios from "axios";
import {
  FETCH_USER,
  ACTIVE_ACTION_DROPDOWN,
  ON_MODAL_TITLE_CHANGE,
  ON_MODAL_DESC_CHANGE,
  FETCH_FOLDERS,
  FOLDER_MODAL_STATE,
} from "./types";

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

export const onModalFieldChange = (type, value) => {
  if (type === "title") {
    return {
      type: ON_MODAL_TITLE_CHANGE,
      payload: value,
    };
  } else if (type === "desc") {
    return {
      type: ON_MODAL_DESC_CHANGE,
      payload: value,
    };
  }
};

export const createFolder = (title, desc) => async (dispatch, getState) => {
  const description = desc ? desc : undefined;

  const folder = await axios.post("/api/v1/folder", { title, description });

  dispatch({
    type: FETCH_FOLDERS,
    payload: [...getState().folders, folder.data.folder],
  });
};

export const fetchFolders = () => async (dispatch) => {
  const folders = await axios.get("/api/v1/folder");

  dispatch({ type: FETCH_FOLDERS, payload: folders.data.folders });
};

export const updateFolder = (id, data) => async (dispatch, getState) => {
  const updatedFolder = await axios.patch(`/api/v1/folder/${id}`, data);

  const oldFolders = getState().folders;

  const newFolder = oldFolders.map((folder) => {
    if (folder._id === id) {
      return updatedFolder.data.folder;
    }
    return folder;
  });

  dispatch({ type: FETCH_FOLDERS, payload: newFolder });
};

export const folderModalState = (state) => {
  return {
    type: FOLDER_MODAL_STATE,
    payload: state,
  };
};

export const deleteFolder = () => async (dispatch, getState) => {
  const id = getState().folderModalState.split("-")[1];

  await axios.delete(`/api/v1/folder/${id}`);

  let folders = getState().folders;
  folders = folders.filter((folder) => folder._id !== id);
  dispatch({ type: FETCH_FOLDERS, payload: folders });
};
