import { combineReducers } from "redux";
import fetchUser from "./fetchUser";
import activeDropdown from "./activeDropdown";
import { onModalDescChange, onModalTitleChange } from "./onModalFieldChange";
import createFolder from "./createFolder";
import fetchFolders from "./fetchFolders";

export default combineReducers({
  user: fetchUser,
  activeDropdown,
  modalTitle: onModalTitleChange,
  modalDesc: onModalDescChange,
  folders: fetchFolders,
});
