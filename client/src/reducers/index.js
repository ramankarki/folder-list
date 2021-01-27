import { combineReducers } from "redux";
import fetchUser from "./fetchUser";
import activeDropdown from "./activeDropdown";
import { onModalDescChange, onModalTitleChange } from "./onModalFieldChange";
import fetchFolders from "./fetchFolders";
import folderModalState from "./FolderModalState";
import errorCreator from "./errorCreator";
import isFolderCUDLoading from "./isFolderCUDLoading";

export default combineReducers({
  user: fetchUser,
  activeDropdown,
  modalTitle: onModalTitleChange,
  modalDesc: onModalDescChange,
  folders: fetchFolders,
  folderModalState,
  unexpectedError: errorCreator,
  isFolderCUDLoading: isFolderCUDLoading,
});
