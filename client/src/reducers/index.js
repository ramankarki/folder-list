import { combineReducers } from "redux";
import fetchUser from "./fetchUser";
import activeDropdown from "./activeDropdown";
import { onModalDescChange, onModalTitleChange } from "./onModalFieldChange";
import fetchFolders from "./fetchFolders";
import folderModalState from "./FolderModalState";

export default combineReducers({
  user: fetchUser,
  activeDropdown,
  modalTitle: onModalTitleChange,
  modalDesc: onModalDescChange,
  folders: fetchFolders,
  folderModalState,
});
